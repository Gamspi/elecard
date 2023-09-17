import React, { ComponentProps, memo } from "react"
import { StyledList } from "@shared/ui/typography/list/style"
type Props = ComponentProps<typeof StyledList>
const TypographyList = (props: Props) => {
  return <StyledList {...props} />
}

export const Component = memo(TypographyList)
