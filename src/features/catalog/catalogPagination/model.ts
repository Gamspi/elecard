import { useTypeSelector } from "@shared/lib"
import { useMemo } from "react"

type ModelType = {
  pageSize: number
}

export const useModel = ({ pageSize }: ModelType) => {
  const { list } = useTypeSelector((state) => state.catalog)
  const totalPageCount = useMemo(() => {
    return Math.ceil(list.length / pageSize)
  }, [list.length, pageSize])

  return {
    totalPageCount,
  }
}
