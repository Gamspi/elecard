import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { CatalogModel } from "@entities/catalog/"

export const store = configureStore({
  reducer: {
    catalog: CatalogModel.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
