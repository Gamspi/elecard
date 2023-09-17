/**
 * Функция преобразует количество миллисекунд в человекочитаемую дату
 * @param ms - миллисекунды
 * @example
 * dateFormatter(1393824669830)
 * //=> March 3, 2014
 */
export function dateFormatter(ms: number) {
  const date = new Date(ms)
  const dateTimeFormat = new Intl.DateTimeFormat("en-En", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return dateTimeFormat.format(date)
}
