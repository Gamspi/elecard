import { ResponseCatalogItem } from "@shared/api/elecard"
import { API_URL, isDevEnv } from "@shared/config"
import { dateFormatter } from "@shared/lib"
import { getCatalogItemName } from "@entities/catalog/lib/getCatalogItemName"
import { fileSizeFormatter } from "@shared/lib/formatters/fileSizeFormatter"

/**
 * Функция преобразует элемент масива каталога, полученный с запроса
 * @param item - элемент каталога полученный с запроса
 * @param id Хардкод, индекс, используется как id. сделанный для нормальной работы приложения, по хорошеме получать из запроса
 */
export function catalogItemConverter(item: ResponseCatalogItem, id: number) {
  const image = isDevEnv ? `${API_URL}/${item.image}` : item.image
  const date = dateFormatter(item.timestamp)
  const name = getCatalogItemName(item.image)
  const displayFileSize = fileSizeFormatter(item.filesize)
  return { ...item, date, image, id, name, displayFileSize }
}
