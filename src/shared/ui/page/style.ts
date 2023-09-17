import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

export const StyledPage = styled.div`
  padding: 6rem 0;
  height: 100%;
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    padding: 4rem 0;
  }
  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    padding: 6rem 0;
  }
`
