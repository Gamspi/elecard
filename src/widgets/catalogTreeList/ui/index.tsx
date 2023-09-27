import React, { memo } from "react"
import { Component as TreeListContent } from "./components/treeListContent"
import { Component as TreeListButton } from "./components/treeListButton"

import { useController as useTreeListController } from "@widgets/catalogTreeList/model"

const CatalogTreeList = () => {
  const { treeList } = useTreeListController()
  return !treeList ? null : (
    <ul>
      <TreeListContent item={treeList} button={<TreeListButton />} />
    </ul>
  )
}
export const Component = memo(CatalogTreeList)
