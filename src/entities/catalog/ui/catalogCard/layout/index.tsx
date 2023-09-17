import React, { ComponentProps, memo, ReactElement } from "react"
import * as StyledComponent from "../style"

import { Typography } from "@shared/ui"
import { CatalogItem } from "@entities/catalog/model/types"
import { Link } from "react-router-dom"
import { LoadingImage } from "@features/loadingImage"

type Props = {
  item: CatalogItem
  action?: ReactElement
} & ComponentProps<typeof Link>

const Component = ({ item, action, ...props }: Props) => {
  return (
    <StyledComponent.Block>
      <StyledComponent.Container {...props}>
        <StyledComponent.Header>
          <StyledComponent.ImageContainer>
            <LoadingImage
              src={item.image}
              alt={`${item.id}`}
              $objectFit="cover"
            />
          </StyledComponent.ImageContainer>
        </StyledComponent.Header>
        <StyledComponent.Body>
          <StyledComponent.Name level={5}>{item.name}</StyledComponent.Name>
          <StyledComponent.Footer>
            <Typography.Text>{item.date}</Typography.Text>
            <Typography.Text>{item.displayFileSize}</Typography.Text>
          </StyledComponent.Footer>
        </StyledComponent.Body>
      </StyledComponent.Container>
      {action && <StyledComponent.Action>{action}</StyledComponent.Action>}
    </StyledComponent.Block>
  )
}

export const Layout = memo(Component)
