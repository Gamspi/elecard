export type TreeListItem = {
  id: number | string
  name: string
  src: string
  list?: TreeListItem[]
}
