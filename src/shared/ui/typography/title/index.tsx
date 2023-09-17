import React, { ComponentProps, memo, ReactNode } from "react"
import { DEFAULT_ELEMENT } from "./config"
import { StyledTitle } from "./style"
type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children?: ReactNode
} & ComponentProps<typeof StyledTitle>
const Title = ({ level, ...props }: Props) => {
  const TagName = level ? `h${level}` : DEFAULT_ELEMENT
  return <StyledTitle as={TagName} {...props} />
}

export const Component = memo(Title)
