import React, { memo } from "react"
import { Pagination } from "@shared/ui"
import { useModel } from "../model"

type Props = {
  currentPage: number
  pageSize: number
  onChange: (page: number) => void
}
const CatalogPagination = ({ pageSize, onChange, currentPage }: Props) => {
  const { totalPageCount } = useModel({ pageSize })
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
