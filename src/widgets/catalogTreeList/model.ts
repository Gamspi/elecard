import { useTypeSelector } from "@shared/lib"
import { useMemo } from "react"
import { TreeListItem } from "@shared/ui/treeList/lib"
import { catalogTreeFormatter } from "@widgets/catalogTreeList/lib/formatter"

export const useModel = () => {
  const { list } = useTypeSelector((state) => state.catalog)

  const treeList = useMemo<{ [key: string]: TreeListItem }>(() => {
    // const result: TreeListItem[] = []
    return list.reduce<{ [key: string]: TreeListItem }>((acc, item) => {
      const category = acc[item.category]
      const catalogItem = catalogTreeFormatter(item)
      if (category && category.list) {
        category.list = [...category.list, catalogItem]
      } else {
        acc[item.category] = {
          list: [catalogItem],
          id: item.category,
          name: item.category,
        }
      }
      return acc
    }, {})
  }, [list])
  return {
    treeList,
  }
}
