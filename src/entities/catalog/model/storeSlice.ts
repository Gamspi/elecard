import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { elecard } from "@shared/api"
import {
  catalogItemConverter,
  catalogTreeConverter,
} from "@entities/catalog/lib/converters"
import {
  CatalogErrors,
  CatalogItem,
  TreeListItem,
} from "@entities/catalog/model/types"
import { DELETE_CATALOG_KEY } from "@entities/catalog/config"
import { getDeletedList } from "@entities/catalog/lib/getDeletedList"

const getCatalogList = createAsyncThunk(
  "catalog/fetchCatalogList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await elecard.catalog.fetchCatalogList()
      return response.data
    } catch (e) {
      return rejectWithValue("Error receiving catalog cards")
    }
  },
)

const slice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    updateIsOpenImage(state, action: PayloadAction<boolean>) {
      state.isOpenCurrentImage = action.payload
    },
    updateDeletedList(state) {
      state.deletedList = getDeletedList()
    },
    setCurrentItem: (state, action: PayloadAction<CatalogItem | null>) => {
      state.currentItem = action.payload
    },
    resetError: (state, action: PayloadAction<keyof CatalogErrors>) => {
      state.errors[action.payload] = false
    },
    refreshCatalogList: (state) => {
      state.deletedList = []
      localStorage.setItem(DELETE_CATALOG_KEY, "")
    },
    deleteCatalogItem: (state, action: PayloadAction<CatalogItem["id"]>) => {
      state.deletedList = [...state.deletedList, action.payload]
      const deletedList = getDeletedList()
      localStorage.setItem(
        DELETE_CATALOG_KEY,
        JSON.stringify([...deletedList, action.payload]),
      )
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatalogList.pending, (state) => {
        state.isLoading = true
        state.errors = {
          ...state.errors,
          fetchList: true,
        }
      })
      .addCase(getCatalogList.fulfilled, (state, action) => {
        if (!(action.payload && Array.isArray(action.payload))) return
        const currentList: CatalogItem[] = []
        const treeList: { [key: string]: TreeListItem } = {}
        action.payload.forEach((item, index) => {
          if (item) {
            const currentItem = catalogItemConverter(item, index)
            currentList.push(currentItem)
            const category = treeList[currentItem.category]
            const treeItem = catalogTreeConverter(currentItem)
            if (category && category.list) {
              category.list.push(treeItem)
            } else {
              treeList[item.category] = {
                list: [treeItem],
                id: item.category,
                name: item.category,
              }
            }
          }
        })
        state.treeList = {
          id: "root",
          name: "root",
          list: Object.entries(treeList).map(([_, item]) => item),
        }
        state.list = currentList
        state.isLoading = false
        state.errors = {
          ...state.errors,
          fetchList: false,
        }
      })
      .addCase(getCatalogList.rejected, (state) => {
        state.errors = {
          ...state.errors,
          fetchList: true,
        }
      })
  },
})

export const actions = {
  ...slice.actions,
  getCatalogList,
}
export const reducer = slice.reducer
