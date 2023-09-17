import React, { memo } from "react"
import { PropType } from "@shared/ui/box/flex/types"
import { StyledFlexBox } from "@shared/ui/box/flex/style"

const FlexBox = (props: PropType) => {
  return <StyledFlexBox {...props} />
}

export const Flex = memo(FlexBox)
