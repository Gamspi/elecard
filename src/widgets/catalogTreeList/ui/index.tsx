import React, { memo } from "react"
import { Component as TreeListContent } from "./components/treeListContent"
import { Component as TreeListButton } from "./components/treeListButton"
import { style as StyledComponent } from "./style"

import { useController as useTreeListController } from "@widgets/catalogTreeList/conotroller"

const CatalogTreeList = () => {
  const { treeList } = useTreeListController()
  return !treeList ? null : (
    <StyledComponent.Container>
      <TreeListContent item={treeList} button={TreeListButton} />
    </StyledComponent.Container>
  )
}
export const Component = memo(CatalogTreeList)
