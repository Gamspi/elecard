import React, { memo } from "react"
import { Component as TreeListContent } from "./components/treeListContent"
import { Component as TreeListButton } from "./components/treeListButton"

import { useModel as useTreeListModel } from "@widgets/catalogTreeList/model"

const CatalogTreeList = () => {
  const { treeList } = useTreeListModel()
  return (
    <ul>
      {Object.entries(treeList).map(([_, item]) => (
        <TreeListContent
          key={item.id}
          item={item}
          button={<TreeListButton />}
        />
      ))}
    </ul>
  )
}
export const Component = memo(CatalogTreeList)
