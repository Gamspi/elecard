import React, { memo } from "react"
import * as StyledComponent from "./style"
import { quantityList } from "../config"
import { CatalogComponent } from "@entities/catalog"
import { useModel as useCatalogListModel } from "../model"
import { Loader } from "@shared/ui"

import {
  CatalogFilter,
  CatalogPagination,
  CloseCatalogCard,
  RefreshCatalogList,
} from "@features/catalog"
import { CSSTransition } from "react-transition-group"
import { Box, SelectBox } from "@shared/ui"

const CatalogList = () => {
  const {
    page,
    quantity,
    isLoading,
    computedList,
    scrollListNode,
    handleSetPage,
    handleSetSortedList,
    handleSetQuantity,
  } = useCatalogListModel()
  return (
    <StyledComponent.Block>
      <Loader isLoading={isLoading} />

      <StyledComponent.Actions>
        <Box.Flex $gap={1.6} $justify="flex-end" $align="center">
          <SelectBox
            options={quantityList}
            value={quantity}
            onChange={handleSetQuantity}
          />
          <RefreshCatalogList>Reset</RefreshCatalogList>
        </Box.Flex>

        <CatalogFilter setList={handleSetSortedList} />
      </StyledComponent.Actions>

      <StyledComponent.Scroll autoHide ref={scrollListNode}>
        <StyledComponent.Content>
          {computedList.map((item) => (
            <CSSTransition timeout={300} key={item.id}>
              <CatalogComponent.Card
                to={`${item.id}`}
                item={item}
                action={<CloseCatalogCard id={item.id} />}
              />
            </CSSTransition>
          ))}
        </StyledComponent.Content>
      </StyledComponent.Scroll>

      <StyledComponent.Pagination>
        <CatalogPagination
          currentPage={page}
          pageSize={quantity}
          onChange={handleSetPage}
        />
      </StyledComponent.Pagination>
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogList)
