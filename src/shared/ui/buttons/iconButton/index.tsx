import React, { ComponentProps, memo, ReactElement } from "react"
import { StyledButton } from "@shared/ui/buttons/iconButton/style"

type Props = {
  children: ReactElement<SVGElement>
} & ComponentProps<typeof StyledButton>

const IconButton = (props: Props) => {
  return <StyledButton {...props} />
}

export const Component = memo(IconButton)
