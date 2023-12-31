import { useEffect, useMemo, useRef, useState } from "react"
import { useTypeSelector } from "@shared/lib"
import { DEFAULT_PAGE, QUANTITY } from "@widgets/catalogList/config"

import { CatalogItem } from "@entities/catalog/model/types"
import { CatalogSortEnum } from "@features/catalog/catalogFilter/lib/enum"

export const useController = () => {
  const [sort, setSort] = useState(CatalogSortEnum.CATEGORY)
  const [page, setPage] = useState(DEFAULT_PAGE)

  const [sortedList, setSortedList] = useState<CatalogItem[]>([])
  const { list, deletedList } = useTypeSelector((state) => state.catalog)
  const handleSetPage = (page: number) => {
    setPage(page)
  }
  const handleSetSortedList = (value: CatalogItem[]) => {
    setSortedList(value)
  }

  const computedList = useMemo(() => {
    return list.filter((item) => !deletedList.includes(item.id))
  }, [deletedList, list])

  const computedPage = useMemo(() => {
    const from = QUANTITY * (page - DEFAULT_PAGE)
    const to = QUANTITY * page
    return sortedList.slice(from, to)
  }, [sortedList, page])

  const handleSort = (value: CatalogSortEnum) => {
    setSort(value)
    setPage(DEFAULT_PAGE)
  }

  useEffect(() => {
    if (!computedPage.length && page > 1) setPage((prev) => prev - 1)
  }, [computedPage])

  useEffect(() => {
    if (!deletedList.length && page !== DEFAULT_PAGE) setPage(DEFAULT_PAGE)
  }, [deletedList])

  return {
    page,
    sort,
    computedList,
    computedPage,
    handleSort,
    handleSetPage,
    handleSetSortedList,
  }
}
