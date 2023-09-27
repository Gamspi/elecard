import { useTypeSelector } from "@shared/lib"

export const useModel = () => {
  const { treeList } = useTypeSelector((state) => state.catalog)

  return {
    treeList,
  }
}
