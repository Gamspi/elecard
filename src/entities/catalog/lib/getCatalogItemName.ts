/**
 * Функция возвращает имя каталога, преобразуя url файла
 * @param url url файла
 * @example
 * getCatalogItemName('animals/annas-hummingbird-5837675__480.jpg')
 * //=> 'annas hummingbird'
 */
export function getCatalogItemName(url: string) {
  const regex = /\/(.+)-/
  const clearRegex = /[^a-z,^A-Z]/g
  const result = url.match(regex)

  return (result && result[1] ? result[1] : "no name").replace(clearRegex, " ")
}
