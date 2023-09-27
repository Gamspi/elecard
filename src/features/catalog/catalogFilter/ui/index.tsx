import React, { memo, useId } from "react"
import { Component as FilterRadioItem } from "./component/RadioFilterItem"
import { filters } from "@features/catalog/catalogFilter/config"
import { useModel as useCatalogFilterModel } from "@features/catalog/catalogFilter/model"
import { style as StyledComponent } from "./style"
import { CatalogItem } from "@entities/catalog/model/types"
import { CatalogSortEnum } from "@features/catalog/catalogFilter/lib/enum"

type Props = {
  setList: (list: CatalogItem[]) => void
  sort: CatalogSortEnum
  setSort: (value: CatalogSortEnum) => void
  list: CatalogItem[]
}
const CatalogFilter = (props: Props) => {
  const { sort, handleChangeSortValue, isRevert } = useCatalogFilterModel(props)
  const id = useId()
  return (
    <StyledComponent.Block>
      {filters.map((item) => (
        <FilterRadioItem
          key={item.code}
          isRevert={isRevert}
          code={item.code}
          onChange={() => handleChangeSortValue(item.code)}
          label={item.label}
          isActive={sort === item.code}
          name={id}
        />
      ))}
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogFilter)
