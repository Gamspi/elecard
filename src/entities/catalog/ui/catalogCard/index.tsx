import React, { memo, ReactElement } from "react"
import * as StyledComponent from "./style"

import { Image } from "@shared/ui"
import { CatalogItem } from "@entities/catalog/model/types"

type Props = {
  item: CatalogItem
  action?: ReactElement
}

const CatalogCard = ({ item, action }: Props) => {
  return (
    <StyledComponent.Block>
      <StyledComponent.Container>
        <StyledComponent.Header>
          <StyledComponent.ImageContainer>
            <Image src={item.image} alt={`${item.id}`} $objectFit="cover" />
          </StyledComponent.ImageContainer>
        </StyledComponent.Header>
        <StyledComponent.Body>
          <StyledComponent.Property>
            <b>Name:</b> {item.name}
          </StyledComponent.Property>
          <StyledComponent.Property>
            <b>Category:</b> {item.category}
          </StyledComponent.Property>
          <StyledComponent.Property>
            <b>Date:</b> {item.date}
          </StyledComponent.Property>
          <StyledComponent.Property>
            <b>Size:</b> {item.displayFileSize}
          </StyledComponent.Property>
        </StyledComponent.Body>
      </StyledComponent.Container>
      {action && <StyledComponent.Action>{action}</StyledComponent.Action>}
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogCard)
