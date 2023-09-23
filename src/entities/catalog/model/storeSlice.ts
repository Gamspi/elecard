import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { elecard } from "@shared/api"
import { catalogItemConverter } from "@entities/catalog/lib/converter"
import { CatalogItem } from "@entities/catalog/model/types"
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
  async (id: number, { rejectWithValue, getState }) => {
    try {
      let result = null
      const {
        catalog: { list },
      } = getState() as RootState
      if (list.length) {
        result = list.find((item) => item.id === id)
      } else {
        const response = await elecard.catalog.fetchCatalogList()
        const data = response.data.find(
          (item, index) => catalogItemConverter(item, index).id === id,
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
    setList: (state, action: PayloadAction<CatalogItem[]>) => {
      state.isError = false
      state.list = action.payload
    },
    setCurrentItem: (state, action: PayloadAction<CatalogItem | null>) => {
      state.currentItem = action.payload
    },
    refreshCatalogList: () => {
      localStorage.setItem(DELETE_CATALOG_KEY, "")
    },
    deleteCatalogItem: (state, action: PayloadAction<CatalogItem["id"]>) => {
      state.list = state.list.filter((item) => item.id !== action.payload)
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
      })
      .addCase(getCatalogList.fulfilled, (state, action) => {
        if (!(action.payload && Array.isArray(action.payload))) return
        const deletedList = getDeletedList()
        state.list = action.payload.reduce<CatalogItem[]>(
          (acc, item, index) => {
            if (item) {
              const elem = catalogItemConverter(item, index)
              if (!deletedList.includes(elem.id)) {
                acc.push(elem)
              }
            }
            return acc
          },
          [],
        )
        state.isLoading = false
        state.isError = false
      })
      .addCase(getCatalogList.rejected, (state) => {
        state.isError = true
      })

      .addCase(getCatalogItemById.pending, (state) => {
        state.isError = false
        state.isItemLoading = true
      })

      .addCase(getCatalogItemById.fulfilled, (state, action) => {
        if (action.payload) {
          state.isError = false
          state.currentItem = action.payload
        } else {
          state.isError = true
        }
      })
      .addCase(getCatalogItemById.rejected, (state) => {
        state.isError = true
      })
  },
})

export const actions = {
  ...slice.actions,
  getCatalogList,
  getCatalogItemById,
}
export const reducer = slice.reducer
