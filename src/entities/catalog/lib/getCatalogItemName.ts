/**
 * Функция возвращает имя каталога, преобразуя url файла
 * @param url url файла
 * @example
 * getCatalogItemName('animals/annas-hummingbird-5837675__480.jpg')
 * //=> 'annas-hummingbird-5837675__480.jpg'
 */
export function getCatalogItemName(url: string) {
  const regex = /\/(.+)$/
  const result = url.match(regex)

  return result && result[1] ? result[1] : "no name"
}
