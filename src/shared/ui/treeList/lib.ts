export type TreeListItem = {
  id: number | string
  name: string
  list?: TreeListItem[]
  src?: string
}
