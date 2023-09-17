import React, { memo, ReactNode } from "react"
import { StyledContainer } from "./style"
type PropType = {
  children?: ReactNode
}

const Container = (props: PropType) => {
  return <StyledContainer {...props} />
}

export const Component = memo(Container)
