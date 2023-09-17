import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"
import { Container } from "@shared/ui"
import Scrollbars from "react-custom-scrollbars-2"

const Content = styled(Container)`
  padding-top: 2.4rem;
  padding-bottom: 1.6rem;
  height: 100%;
  position: relative;

  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    display: grid;
    grid-template-columns: 20rem 1fr;
    gap: 4rem;
  }
  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    display: grid;
    grid-template-columns: 30rem 1fr;
    gap: 4rem;
  }
`
const List = styled.section`
  height: 100%;
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    grid-column: 2/3;
  }
`
const TreeList = styled(Scrollbars)`
  display: none;
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    display: block;
  }
`
export const style = { Content, List, TreeList }
