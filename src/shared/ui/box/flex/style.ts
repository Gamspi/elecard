import styled, { css } from "styled-components"
import { CSSProperties } from "react"

export type StyledPropType = {
  $direction?: CSSProperties["flexDirection"]
  $align?: CSSProperties["alignItems"]
  $justify?: CSSProperties["justifyContent"]
  $gap?: CSSProperties["gap"]
  $wrap?: CSSProperties["flexWrap"]
}

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
  ${({ $wrap }) => {
    if ($wrap)
      return css`
        flex-wrap: ${$wrap};
      `
  }};
`
