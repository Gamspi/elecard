import React, { ComponentProps, memo } from "react"
import { Style as StyledComponent } from "./style"
import { CatalogItem } from "@entities/catalog/model/types"
import { Link } from "react-router-dom"

type Props = {
  item?: CatalogItem
} & ComponentProps<typeof Link>
const CatalogTreeItem = ({ item, ...props }: Props) => {
  if (!item) return null
  return (
    <StyledComponent.Block>
      <Link {...props}>
        <StyledComponent.Img src={item.image} alt={item.name} />
      </Link>
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
