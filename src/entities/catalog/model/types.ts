import { catalogItemConverter } from "@entities/catalog/lib/converters"

export type CatalogItem = ReturnType<typeof catalogItemConverter>

export interface CatalogState {
  list: CatalogItem[]
  deletedList: CatalogItem["id"][]
  isLoading: boolean
  isItemLoading: boolean
  isError: boolean
  currentItem: CatalogItem | null
  treeList: TreeListItem | null
  page: number
}

export type TreeListItem = {
  id: number | string
  name: string
  item?: CatalogItem
  list?: TreeListItem[]
}
