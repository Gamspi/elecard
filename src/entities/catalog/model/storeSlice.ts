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
import { RootState } from "@app/store"

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

const getCatalogItemById = createAsyncThunk(
  "catalog/fetchCatalogItemById",
  async (id: number | string, { rejectWithValue, getState }) => {
    try {
      let result = null
      const {
        catalog: { list },
      } = getState() as RootState
      if (list.length) {
        result = list.find((item) => item.id.toString() === id.toString())
      } else {
        const response = await elecard.catalog.fetchCatalogList()
        const data = response.data.find(
          (item, index) =>
            catalogItemConverter(item, index).id.toString() === id.toString(),
        )
        if (!data) return rejectWithValue("Error getting directory item.")
        result = catalogItemConverter(data, id)
      }
      return result
    } catch (e) {
      return rejectWithValue("Ошибка получение карточек каталога")
    }
  },
)

const slice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
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

      .addCase(getCatalogItemById.pending, (state) => {
        state.errors = {
          ...state.errors,
          fetchItem: false,
        }
        state.isItemLoading = true
      })

      .addCase(getCatalogItemById.fulfilled, (state, action) => {
        if (action.payload) {
          state.errors = {
            ...state.errors,
            fetchItem: false,
          }
          state.currentItem = action.payload
        } else {
          state.errors = {
            ...state.errors,
            fetchItem: true,
          }
        }
      })
      .addCase(getCatalogItemById.rejected, (state) => {
        state.errors = {
          ...state.errors,
          fetchItem: true,
        }
      })
  },
})

export const actions = {
  ...slice.actions,
  getCatalogList,
  getCatalogItemById,
}
export const reducer = slice.reducer
