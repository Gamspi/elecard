import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

export const StyledContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  padding: 0 1.6rem;
  margin: 0 auto;
  @media (min-width: ${BreakpointEnum.TABLET}px) {
    padding: 0 2.2rem;
  }
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    padding: 0 4.4rem;
  }
  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    padding: 0 6.6rem;
  }
`
