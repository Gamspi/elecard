import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

export const StyledPage = styled.div`
  padding: 2.2rem 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    padding: 4rem 0;
  }
`
