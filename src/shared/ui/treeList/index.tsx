import React, { memo } from "react"
import { TreeListItem } from "./lib"
import { Component as TreeListContent } from "./components/treeListContent"
import { Component as TreeListButton } from "./components/treeListButton"

type Props = {
  items: TreeListItem[]
}
const TreeList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <TreeListContent item={item} button={<TreeListButton />} />
      ))}
    </ul>
  )
}
export const Component = memo(TreeList)
