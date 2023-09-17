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
  const [quantity, setQuantity] = useState(QUANTITY)
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
    const from = quantity * (page - 1)
    const to = quantity * page
    return sortedList.slice(from, to)
  }, [quantity, sortedList, page])

  const fetchData = async () => {
    await dispatch(CatalogModel.actions.getCatalogList())
  }

  const handelSetQuantity = (value: number | string) => {
    setQuantity(+value)
  }
  useEffect(() => {
    setPage(1)
  }, [sortedList])
  useEffect(() => {
    void fetchData()
  }, [])

  return {
    page,
    quantity,
    isLoading,
    computedList,
    scrollListNode,
    handelSetPage,
    handelSetQuantity,
    handelSetSortedList,
  }
}
