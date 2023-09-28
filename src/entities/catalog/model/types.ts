import { catalogItemConverter } from "@entities/catalog/lib/converters"

export type CatalogItem = ReturnType<typeof catalogItemConverter>

export interface CatalogErrors {
  fetchList: boolean
  fetchItem: boolean
}

export interface CatalogState {
  list: CatalogItem[]
  deletedList: CatalogItem["id"][]
  isLoading: boolean
  isItemLoading: boolean
  errors: CatalogErrors
  currentItem: CatalogItem | null
  treeList: TreeListItem | null
}

export type TreeListItem = {
  id: number | string
  name: string
  item?: CatalogItem
  list?: TreeListItem[]
}
