import { DELETE_CATALOG_KEY } from "@entities/catalog/config"
import { CatalogItem } from "@entities/catalog/model/types"

/**
 * Функция возвращает массив удаленных элементов, хронящиеся в localStorage
 */
export function getDeletedList() {
  const localList = localStorage.getItem(DELETE_CATALOG_KEY)
  return (localList ? JSON.parse(localList) : []) as CatalogItem["id"][]
}
