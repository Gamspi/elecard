import React, { memo, ReactElement } from "react"
import * as StyledComponent from "./style"

import { Image, Typography } from "@shared/ui"
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
          <Typography.Text>
            <b>Name:</b> {item.name}
          </Typography.Text>
          <Typography.Text>
            <b>Category:</b> {item.category}
          </Typography.Text>
          <Typography.Text>
            <b>Date:</b> {item.date}
          </Typography.Text>
          <Typography.Text>
            <b>Size:</b> {item.displayFileSize}
          </Typography.Text>
        </StyledComponent.Body>
      </StyledComponent.Container>
      {action && <StyledComponent.Action>{action}</StyledComponent.Action>}
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogCard)
