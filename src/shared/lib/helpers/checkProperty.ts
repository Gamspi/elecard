/**
 * Функция проверяет наличие свойства у объекта, еслт его нет то выбрасывает ошибку
 * @param object - объект проверки
 * @param key - ключ объекта
 * @throwable
 */
export function checkProperty<T extends object, P extends keyof T>(
  object: T,
  key: P,
): T[P] {
  if (!(key in object)) {
    throw new Error(`property ${key.toString()} is missing`)
  }
  return object[key]
}
