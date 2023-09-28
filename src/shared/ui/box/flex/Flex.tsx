import React, { ComponentProps, memo, ReactNode } from "react"
import { StyledFlexBox } from "@shared/ui/box/flex/style"
type Props = {
  children?: ReactNode
} & ComponentProps<typeof StyledFlexBox>
const FlexBox = (props: Props) => {
  return <StyledFlexBox {...props} />
}

export const Flex = memo(FlexBox)
