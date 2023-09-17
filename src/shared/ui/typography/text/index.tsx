import React, { ComponentProps, memo } from "react"
import { StyledText } from "@shared/ui/typography/text/style"

type Props = ComponentProps<typeof StyledText>
const Component = (props: Props) => {
  return <StyledText {...props} />
}

export const Text = memo(Component)
