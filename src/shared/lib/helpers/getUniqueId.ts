/**
 * Функция возвращает уникольный id
 */
export function getUniqueId() {
  return ~~(Math.random() * Date.now())
}
