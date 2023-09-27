import { CatalogState } from "@entities/catalog/model/types"

export const initialState: CatalogState = {
  list: [],
  deletedList: [],
  isError: false,
  isLoading: false,
  currentItem: null,
  isItemLoading: false,
  treeList: null,
  page: 1,
}
