import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

const Container = styled.div`
  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    padding: 0 2rem;
  }
  @media (min-width: ${BreakpointEnum.MAX}px) {
    padding: 0 4rem;
  }
`
export const style = {
  Container,
}
