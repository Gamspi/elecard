import { catalogItemConverter } from "@entities/catalog/lib/converter"

export type CatalogItem = ReturnType<typeof catalogItemConverter>

export interface CatalogState {
  list: CatalogItem[]
  isLoading: boolean
  isItemLoading: boolean
  isError: boolean
  currentItem: CatalogItem | null
}
