import React, { ComponentProps, memo, ReactElement } from "react"
import { Style as StyledComponent } from "./style"
import { CatalogItem } from "@entities/catalog/model/types"

type Props = {
  item?: CatalogItem
  actionBtn: React.ElementType
}
const CatalogTreeItem = ({ item, actionBtn: ActionBtn }: Props) => {
  if (!item) return null
  return (
    <StyledComponent.Block>
      <ActionBtn id={item.id}>
        <StyledComponent.Img src={item.image} alt={item.name} />
      </ActionBtn>
      <StyledComponent.Body>
        <StyledComponent.Property>
          <b>Name:</b>&nbsp;{item.name}
        </StyledComponent.Property>
        <StyledComponent.Property>
          <b>Size:</b>&nbsp;
          {item.displayFileSize}
        </StyledComponent.Property>
        <StyledComponent.Property>
          <b>Date:</b>&nbsp;{item.date}
        </StyledComponent.Property>
      </StyledComponent.Body>
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogTreeItem)
