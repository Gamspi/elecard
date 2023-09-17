/**
 * Функция преобразует размер фала в человекочитаемую строку
 * @param size - размер файла
 * @example
 * fileSizeFormatter(74353)
 * //=> 74KB
 */
export function fileSizeFormatter(size: number) {
  const sizeFormatter = new Intl.NumberFormat("en-EN", {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow",
  })
  return sizeFormatter.format(size)
}
