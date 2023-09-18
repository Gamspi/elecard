import { CatalogState } from "@entities/catalog/model/types"

export const initialState: CatalogState = {
  list: [],
  isError: false,
  isLoading: false,
  currentItem: null,
  isItemLoading: false,
}
