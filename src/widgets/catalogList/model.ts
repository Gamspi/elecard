import { useEffect, useMemo, useRef, useState } from "react"
import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { QUANTITY } from "@widgets/catalogList/config"
import { CatalogModel } from "@entities/catalog"
import { CatalogItem } from "@entities/catalog/model/types"
import Scrollbars from "react-custom-scrollbars-2"

export const useModel = () => {
  const scrollListNode = useRef<Scrollbars>(null)
  const dispatch = useAppDispatch()
  const [sortedList, setSortedList] = useState<CatalogItem[]>([])
  const { isLoading } = useTypeSelector((state) => state.catalog)
  const [page, setPage] = useState(1)
  const handelSetPage = (page: number) => {
    setPage(page)
    scrollListNode.current?.scrollTop(0)
  }
  const handelSetSortedList = (value: CatalogItem[]) => {
    setSortedList(value)
  }
  const computedList = useMemo(() => {
    const from = QUANTITY * (page - 1)
    const to = QUANTITY * page
    return sortedList.slice(from, to)
  }, [sortedList, page])

  const fetchData = async () => {
    await dispatch(CatalogModel.actions.getCatalogList())
  }
  useEffect(() => {
    setPage(1)
  }, [sortedList])
  useEffect(() => {
    void fetchData()
  }, [])

  return {
    page,
    isLoading,
    computedList,
    scrollListNode,
    handelSetPage,
    handelSetSortedList,
  }
}
