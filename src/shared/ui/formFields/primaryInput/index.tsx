import React, { ComponentProps, memo } from "react"
import { StyledPrimaryInput } from "./style"

const Index = (props: ComponentProps<"input">) => {
  return <StyledPrimaryInput {...props} />
}

export const Component = memo(Index)
