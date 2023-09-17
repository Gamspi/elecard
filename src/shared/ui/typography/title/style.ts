import styled, { css } from "styled-components"
import { BreakpointEnum } from "@shared/lib/enums/BreakpointEnum"

const h1 = css`
  font-size: 4rem;
  font-weight: 500;
  line-height: 5.4rem;
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    font-size: 5.6rem;
    font-weight: 500;
    line-height: 6.8rem;
  }
`
const h5 = css`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.8rem;

  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`
const h6 = css`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.4rem;

  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`

export const StyledTitle = styled.div`
  ${({ as }) => {
    switch (as) {
      case "h5":
        return h5
      case "h6":
        return h6
      default:
        return h1
    }
  }}
`
