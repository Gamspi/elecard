import { ResponseCatalogItem } from "@shared/api/elecard"
import { API_URL, isDevEnv } from "@shared/config"
import { dateFormatter } from "@shared/lib"
import { getCatalogItemName } from "@entities/catalog/lib/getCatalogItemName"
import { fileSizeFormatter } from "@shared/lib/formatters/fileSizeFormatter"
import { checkProperty } from "@shared/lib/helpers/checkProperty"
import { CatalogItem, TreeListItem } from "@entities/catalog/model/types"

/**
 * Функция преобразует элемент масива каталога, полученный с запроса
 * @param item - элемент каталога полученный с запроса
 * @param id Хардкод, индекс, используется как id. сделанный для нормальной работы приложения, по хорошеме получать из запроса
 */
export function catalogItemConverter(
  item: ResponseCatalogItem,
  id: number | string,
) {
  const filesize = checkProperty(item, "filesize")
  const timestamp = checkProperty(item, "timestamp")
  const category = checkProperty(item, "category")
  const itemImage = checkProperty(item, "image")

  const image = isDevEnv ? `${API_URL}/${itemImage}` : itemImage
  const name = getCatalogItemName(itemImage)
  const date = dateFormatter(timestamp)
  const displayFileSize = fileSizeFormatter(filesize)

  return {
    id,
    name,
    date,
    image,
    category,
    timestamp,
    filesize,
    displayFileSize,
  }
}
export function catalogTreeConverter(item: CatalogItem): TreeListItem {
  return {
    id: item.id,
    name: item.name,
    item,
  }
}
