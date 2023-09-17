import { useEffect, useMemo, useState } from "react"
import { CatalogSortEnum } from "./lib/enum"
import { CatalogItem } from "@entities/catalog/model/types"
import { useTypeSelector } from "@shared/lib"

type Args = {
  setList: (list: CatalogItem[]) => void
}

export const useModel = ({ setList }: Args) => {
  const [sort, setSort] = useState(CatalogSortEnum.NAME)
  const [isRevert, setIsRevert] = useState(false)
  const { isLoading, list } = useTypeSelector((state) => state.catalog)
  const sortCatalogList = useMemo(() => {
    let resultList = [...list]
    switch (sort) {
      case CatalogSortEnum.DATE:
        resultList = [...resultList.sort((a, b) => b.timestamp - a.timestamp)]
        break
      case CatalogSortEnum.SIZE:
        resultList = [...resultList.sort((a, b) => b.filesize - a.filesize)]
        break
      case CatalogSortEnum.NAME:
        resultList = [
          ...resultList.sort((a, b) =>
            a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1,
          ),
        ]
        break
    }
    if (isRevert) resultList = [...resultList.reverse()]
    return resultList
  }, [isRevert, list, sort])
  const handelChangeSortValue = (code: CatalogSortEnum) => {
    if (code === sort) return setIsRevert((prev) => !prev)
    setSort(code)
    setIsRevert(false)
  }

  useEffect(() => {
    if (isLoading || (!isLoading && !list.length)) return
    setList(sortCatalogList)
  }, [isLoading, sortCatalogList])
  return {
    sort,
    isRevert,
    handelChangeSortValue,
  }
}
