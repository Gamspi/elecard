export function getUniqueId() {
  return ~~(Math.random() * Date.now())
}
