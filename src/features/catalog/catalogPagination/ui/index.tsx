import React, { memo } from "react"
import { Pagination } from "@shared/ui"
import { useModel } from "../model"
import { CatalogItem } from "@entities/catalog/model/types"

type Props = {
  currentPage: number
  pageSize: number
  onChange: (page: number) => void
  list: CatalogItem[]
}
const CatalogPagination = ({
  pageSize,
  onChange,
  currentPage,
  list,
}: Props) => {
  const { totalPageCount } = useModel({ pageSize, list })
  return (
    <Pagination.Button
      totalPageCount={totalPageCount}
      onChange={onChange}
      currentPage={currentPage}
      siblingCount={1}
    />
  )
}

export const Component = memo(CatalogPagination)
