import React, { ComponentProps, memo } from "react"
import { StyledCheckbox } from "@shared/ui/formFields/checkbox/style"

type Props = {
  isRadio?: boolean
} & Omit<ComponentProps<typeof StyledCheckbox>, "type">
const CheckBox = ({ isRadio, ...props }: Props) => {
  const type = isRadio ? "radio" : "checkbox"
  return <StyledCheckbox {...props} type={type} />
}

export const Component = memo(CheckBox)
