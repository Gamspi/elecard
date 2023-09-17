import { useTypeSelector } from "@shared/lib"

type ModelType = {
  pageSize: number
}

export const useModel = ({ pageSize }: ModelType) => {
  const { list } = useTypeSelector((state) => state.catalog)
  const totalPageCount = Math.ceil(list.length / pageSize)
  return {
    totalPageCount,
  }
}
