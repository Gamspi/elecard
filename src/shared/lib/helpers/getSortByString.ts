export function sortByString(a: string, b: string) {
  const aValue = a.toLowerCase()
  const bValue = b.toLowerCase()
  if (aValue < bValue) return -1
  if (aValue > bValue) return 1
  return 0
}
