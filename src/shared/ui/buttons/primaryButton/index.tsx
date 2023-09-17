import React, { ComponentProps, memo, ReactNode } from "react"
import { StyledButton } from "./style"

export type Props = {
  children?: ReactNode
} & ComponentProps<"button">

const PrimaryButton = (props: Props) => {
  return <StyledButton {...props} />
}

export const Component = memo(PrimaryButton)
