import { CatalogState } from "@entities/catalog/model/types"

export const initialState: CatalogState = {
  list: [],
  deletedList: [],
  errors: {
    fetchList: false,
    fetchItem: false,
  },
  isLoading: false,
  currentItem: null,
  isItemLoading: false,
  treeList: null,
}
