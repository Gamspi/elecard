import styled, { css } from "styled-components"
import { StyledPropType } from "@shared/ui/box/flex/types"

export const StyledFlexBox = styled.div<StyledPropType>`
  display: flex;
  ${({ $direction }) => {
    if ($direction)
      return css`
        flex-direction: ${$direction};
      `
  }};
  ${({ $justify }) => {
    if ($justify)
      return css`
        justify-content: ${$justify};
      `
  }};
  ${({ $align }) => {
    if ($align)
      return css`
        align-items: ${$align};
      `
  }};
  ${({ $gap }) => {
    if ($gap)
      return css`
        gap: ${$gap}rem;
      `
  }};
`
