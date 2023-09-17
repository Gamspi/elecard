import React, { ComponentProps, memo, ReactElement } from "react"
import * as StyledComponent from "./style"

type Props = {
  children?: ReactElement<string>
} & ComponentProps<typeof StyledComponent.Block>
const TreeListContent = ({ children, ...props }: Props) => {
  return (
    <StyledComponent.Block {...props} $isActive={props.$isActive}>
      <StyledComponent.Title level={6}>{children}</StyledComponent.Title>
    </StyledComponent.Block>
  )
}

export const Component = memo(TreeListContent)
