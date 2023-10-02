import React, { memo, useState } from "react"
import * as StyledComponent from "./style"
import { Component as CatalogTreeItem } from "@entities/catalog/ui/catalogTreeListItem"
import { TreeListItem } from "@entities/catalog/model/types"
import { OpenCatalogImage } from "@features/catalog/openCatalogImage"

type Props = {
  item: TreeListItem
  button: React.ElementType
}
const TreeListContent = ({ item, button: ButtonElement }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleChangeIsOpen = () => setIsOpen((prev) => !prev)
  let childrenList = null

  if (item.list?.length) {
    childrenList = (
      <>
        {item.list.map((i) => (
          <Component item={i} key={i.id} button={ButtonElement} />
        ))}
      </>
    )
  }

  return (
    <StyledComponent.Item>
      <ButtonElement onClick={handleChangeIsOpen} $isActive={isOpen}>
        {item.name}
      </ButtonElement>
      <StyledComponent.Children $isOpen={isOpen} as={item.item ? "div" : ""}>
        {childrenList || (
          <CatalogTreeItem item={item.item} actionBtn={OpenCatalogImage} />
        )}
      </StyledComponent.Children>
    </StyledComponent.Item>
  )
}

export const Component = memo(TreeListContent)
