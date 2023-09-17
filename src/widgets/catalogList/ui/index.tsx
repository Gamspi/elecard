import React, { memo } from "react"
import * as StyledComponent from "./style"
import { QUANTITY } from "../config"
import { CatalogComponent } from "@entities/catalog"
import { useModel as useCatalogListModel } from "../model"
import { Loader } from "@widgets/loader"

import {
  CatalogFilter,
  CatalogPagination,
  CloseCatalogCard,
  RefreshCatalogList,
} from "@features/catalog"
import { CSSTransition } from "react-transition-group"

const CatalogList = () => {
  const {
    page,
    isLoading,
    computedList,
    scrollListNode,
    handelSetPage,
    handelSetSortedList,
  } = useCatalogListModel()
  return (
    <StyledComponent.Block>
      <Loader isLoading={isLoading} />

      <StyledComponent.Actions>
        <CatalogFilter setList={handelSetSortedList} />
        <RefreshCatalogList>Reset</RefreshCatalogList>
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
          pageSize={QUANTITY}
          onChange={handelSetPage}
        />
      </StyledComponent.Pagination>
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogList)
