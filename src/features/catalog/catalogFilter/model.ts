import { useEffect, useMemo, useState } from "react"
import { CatalogSortEnum } from "./lib/enum"
import { CatalogItem } from "@entities/catalog/model/types"
import { useTypeSelector } from "@shared/lib"
import { sortCatalogList } from "@features/catalog/catalogFilter/lib/helpers/sortCatalogList"

type Args = {
  setList: (list: CatalogItem[]) => void
}

export const useModel = ({ setList }: Args) => {
  const [sort, setSort] = useState(CatalogSortEnum.CATEGORY)
  const [isRevert, setIsRevert] = useState(false)
  const { isLoading, list } = useTypeSelector((state) => state.catalog)
  const sortedCatalogList = useMemo(() => {
    let resultList = sortCatalogList(list, sort)
    if (isRevert) resultList = [...resultList.reverse()]
    return resultList
  }, [isRevert, list, sort])
  const handleChangeSortValue = (code: CatalogSortEnum) => {
    if (code === sort) return setIsRevert((prev) => !prev)
    setSort(code)
    setIsRevert(false)
  }

  useEffect(() => {
    if (isLoading || (!isLoading && !list.length)) return
    setList(sortedCatalogList)
  }, [isLoading, sortedCatalogList])
  return {
    sort,
    isRevert,
    handleChangeSortValue,
  }
}
