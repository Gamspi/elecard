import { CatalogItem } from "@entities/catalog/model/types"
import { CatalogSortEnum } from "@features/catalog/catalogFilter/lib/enum"
import { sortByString } from "@shared/lib/helpers/getSortByString"

export function sortCatalogList(list: CatalogItem[], sort: CatalogSortEnum) {
  let resultList = [...list]
  switch (sort) {
    case CatalogSortEnum.DATE:
      return resultList.sort((a, b) => b.timestamp - a.timestamp)
    case CatalogSortEnum.SIZE:
      return resultList.sort((a, b) => b.filesize - a.filesize)
    case CatalogSortEnum.NAME:
      return resultList.sort((a, b) => sortByString(a.name, b.name))
    case CatalogSortEnum.CATEGORY:
      return resultList.sort((a, b) => sortByString(a.category, b.category))
    default:
      return resultList
  }
}
