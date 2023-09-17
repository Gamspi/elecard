import React, { memo } from "react"
import { style as StyledComponent } from "./style"
import { SelectOption } from "./lib"
import { useController as useSelectController } from "@shared/ui/selectBox/controller"

type Props = {
  placeholder?: string
  options: SelectOption[]
  value: string | number
  onChange: (value: string | number) => void
}
const SelectBox = ({ placeholder, options, onChange, value }: Props) => {
  const { containerRef, isOpen, currentOption, handelToggleIsOpen } =
    useSelectController({
      value,
      options,
    })
  return (
    <StyledComponent.Container ref={containerRef} className="j-select">
      <StyledComponent.Header onClick={handelToggleIsOpen} $isOpen={isOpen}>
        <span>{currentOption ? currentOption.label : placeholder}</span>
      </StyledComponent.Header>
      <StyledComponent.Footer $isOpen={isOpen}>
        <StyledComponent.List>
          {options.map((item) => (
            <StyledComponent.Item
              key={item.code}
              onClick={() => onChange(item.code)}
              $isActive={item.code === currentOption?.code}
            >
              {item.label}
            </StyledComponent.Item>
          ))}
        </StyledComponent.List>
      </StyledComponent.Footer>
    </StyledComponent.Container>
  )
}

export const Component = memo(SelectBox)
