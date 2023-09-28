import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

const Container = styled.ul`
  padding: 2rem 0;
  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    padding: 4rem 2rem;
  }
  @media (min-width: ${BreakpointEnum.MAX}px) {
    padding: 4rem 4rem;
  }
`
export const style = {
  Container,
}
