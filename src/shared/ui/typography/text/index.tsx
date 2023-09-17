import React, { ComponentProps, memo } from "react"
import { StyledText } from "@shared/ui/typography/text/style"

type Props = ComponentProps<typeof StyledText>
const Text = (props: Props) => {
  return <StyledText {...props} />
}

export const Component = memo(Text)
