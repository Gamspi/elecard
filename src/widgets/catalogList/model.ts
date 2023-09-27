import { useEffect, useMemo, useRef, useState } from "react"
import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { DEFAULT_PAGE, QUANTITY } from "@widgets/catalogList/config"

import { CatalogItem } from "@entities/catalog/model/types"
import { CatalogSortEnum } from "@features/catalog/catalogFilter/lib/enum"
import { CatalogModel } from "@entities/catalog"

export const useController = () => {
  const isInit = useRef(false)
  const [sort, setSort] = useState(CatalogSortEnum.CATEGORY)
  const scrollListNode = useRef<HTMLElement>(null)
  const dispatch = useAppDispatch()

  const [sortedList, setSortedList] = useState<CatalogItem[]>([])
  const { list, deletedList, page } = useTypeSelector((state) => state.catalog)
  const setPage = (page: number) => {
    dispatch(CatalogModel.actions.setPage(page))
  }
  const handleSetPage = (page: number) => {
    setPage(page)
    if (!scrollListNode.current) return

    scrollListNode.current.scrollIntoView({
      block: "start",
      inline: "start",
      behavior: "smooth",
    })
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
  const init = () => {
    if (!deletedList.length && page !== DEFAULT_PAGE) setPage(DEFAULT_PAGE)
  }

  useEffect(() => {
    if (!isInit.current) return
    if (!computedPage.length && page > 1) setPage(page - 1)
  }, [computedPage])

  useEffect(() => {
    if (isInit.current) {
      init()
    } else {
      isInit.current = true
    }
  }, [deletedList])

  return {
    page,
    sort,
    computedList,
    computedPage,
    scrollListNode,
    handleSort,
    handleSetPage,
    handleSetSortedList,
  }
}
