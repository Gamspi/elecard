import React, { memo } from "react"
import { style as StyledComponent } from "./style"
import { QUANTITY } from "../config"
import { CatalogComponent } from "@entities/catalog"
import { useModel as useCatalogListModel } from "../model"

import {
  CatalogFilter,
  CatalogPagination,
  CloseCatalogCard,
  RefreshCatalogList,
} from "@features/catalog"
import { Box } from "@shared/ui"

const CatalogList = () => {
  const {
    page,
    sort,
    computedPage,
    computedList,
    handleSort,
    handleSetPage,
    handleSetSortedList,
  } = useCatalogListModel()
  return (
    <StyledComponent.Block>
      <StyledComponent.Actions>
        <Box.Flex $justify="space-between" $align="center">
          <CatalogFilter
            list={computedList}
            setList={handleSetSortedList}
            sort={sort}
            setSort={handleSort}
          />
          <RefreshCatalogList>Reset</RefreshCatalogList>
        </Box.Flex>
      </StyledComponent.Actions>
      <StyledComponent.Wrapper>
        <StyledComponent.Content>
          {computedPage.map((item) => (
            <CatalogComponent.Card
              key={item.id}
              item={item}
              action={<CloseCatalogCard id={item.id} />}
            />
          ))}
        </StyledComponent.Content>
      </StyledComponent.Wrapper>
      <StyledComponent.Pagination>
        <CatalogPagination
          list={computedList}
          currentPage={page}
          pageSize={QUANTITY}
          onChange={handleSetPage}
        />
      </StyledComponent.Pagination>
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogList)
