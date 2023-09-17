import React, { ComponentProps, memo, ReactElement } from "react"
import { Style as StyledComponent } from "./style"

type Props = {
  name: string
  action?: ReactElement
  src: string
} & ComponentProps<typeof StyledComponent.Action>
const CatalogTreeItem = ({ name, action, src, ...props }: Props) => {
  return (
    <StyledComponent.Block>
      <StyledComponent.Img src={src} alt={name} />
      <StyledComponent.Action {...props}>{action}</StyledComponent.Action>
      <StyledComponent.Name level={6}>{name}</StyledComponent.Name>
    </StyledComponent.Block>
  )
}

export const Component = memo(CatalogTreeItem)
