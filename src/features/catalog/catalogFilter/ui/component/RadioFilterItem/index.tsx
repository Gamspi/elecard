import React, { memo } from "react"
import { Typography } from "@shared/ui"
import { OptionType } from "../../../lib/types"
import { style as StyledComponent } from "./style"
import { CatalogSortEnum } from "@features/catalog/catalogFilter/lib/enum"

type Props = {
  isActive: boolean
  isRevert: boolean
  label: string
  name: string
  code: CatalogSortEnum
  onChange: (code: OptionType["code"]) => void
}
const FilterRadioItem = ({
  label,
  isActive,
  onChange,
  isRevert,
  code,
}: Props) => {
  return (
    <StyledComponent.Container $isActive={isActive}>
      <StyledComponent.Wrapper>
        <StyledComponent.Checkbox
          $isActive={isActive}
          type="checkbox"
          checked={isRevert && isActive}
          onChange={() => onChange(code)}
        />
        <Typography.Text>{label}</Typography.Text>
      </StyledComponent.Wrapper>
    </StyledComponent.Container>
  )
}

export const Component = memo(FilterRadioItem)
