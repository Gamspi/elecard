import React, { memo } from "react"
import { Component as TreeListContent } from "./components/treeListContent"
import { Component as TreeListButton } from "./components/treeListButton"

import { useModel as useTreeListModel } from "@widgets/catalogTreeList/model"

const CatalogTreeList = () => {
  const { treeList } = useTreeListModel()
  return !treeList ? null : (
    <ul>
      <TreeListContent item={treeList} button={<TreeListButton />} />
    </ul>
  )
}
export const Component = memo(CatalogTreeList)
