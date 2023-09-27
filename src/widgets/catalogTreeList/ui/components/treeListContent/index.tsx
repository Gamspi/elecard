import React, { memo, ReactElement, useState } from "react"
import * as StyledComponent from "./style"
import { Component as CatalogTreeItem } from "@entities/catalog/ui/catalogTreeListItem"
import { TreeListItem } from "@entities/catalog/model/types"

type Props = {
  item: TreeListItem
  button: ReactElement
}
const TreeListContent = ({ item, button }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleChangeIsOpen = () => setIsOpen((prev) => !prev)
  let childrenList = null
  const ButtonElement = React.cloneElement(button, {
    onClick: handleChangeIsOpen,
    children: item.name,
    $isActive: isOpen,
  })
  if (item.list?.length) {
    childrenList = (
      <>
        {item.list.map((i) => (
          <Component item={i} key={i.id} button={button} />
        ))}
      </>
    )
  }

  return (
    <StyledComponent.Item>
      {ButtonElement}
      <StyledComponent.Children $isOpen={isOpen} as={item.item ? "div" : ""}>
        {childrenList || <CatalogTreeItem item={item.item} to={`${item.id}`} />}
      </StyledComponent.Children>
    </StyledComponent.Item>
  )
}

export const Component = memo(TreeListContent)
