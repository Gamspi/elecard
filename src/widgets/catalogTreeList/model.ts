import { useTypeSelector } from "@shared/lib"

export const useController = () => {
  const { treeList } = useTypeSelector((state) => state.catalog)

  return {
    treeList,
  }
}
