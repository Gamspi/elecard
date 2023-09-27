import { useMemo } from "react"
import { CatalogItem } from "@entities/catalog/model/types"

type ModelType = {
  pageSize: number
  list: CatalogItem[]
}

export const useModel = ({ pageSize, list }: ModelType) => {
  const totalPageCount = useMemo(() => {
    return Math.ceil(list.length / pageSize)
  }, [list.length, pageSize])

  return {
    totalPageCount,
  }
}
