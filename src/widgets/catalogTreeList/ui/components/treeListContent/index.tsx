import React, { memo, ReactElement, useState } from "react"
import { TreeListItem } from "@shared/ui/treeList/lib"
import * as StyledComponent from "./style"
import { Component as CatalogTreeItem } from "../catalogTreeListItem"

type Props = {
  item: TreeListItem
  button: ReactElement
}
const TreeListContent = ({ item, button }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handelChangeIsOpen = () => setIsOpen((prev) => !prev)
  let childrenList = null
  const ButtonElement = React.cloneElement(button, {
    onClick: handelChangeIsOpen,
    children: item.name,
    $isActive: isOpen,
  })
  if (item.list?.length) {
    childrenList = (
      <StyledComponent.Children $isOpen={isOpen}>
        {item.list.map((i) => (
          <Component item={i} key={i.id} button={button} />
        ))}
      </StyledComponent.Children>
    )
  }

  return (
    <StyledComponent.Item>
      {item.list?.length ? (
        ButtonElement
      ) : (
        <CatalogTreeItem
          name={item.name}
          src={item.src || ""}
          to={`${item.id}`}
        />
      )}
      {childrenList}
    </StyledComponent.Item>
  )
}

export const Component = memo(TreeListContent)
