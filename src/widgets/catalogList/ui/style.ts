import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"
import Scrollbars from "react-custom-scrollbars-2"
import { TransitionGroup } from "react-transition-group"

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  @media (min-width: ${BreakpointEnum.TABLET}px) {
    gap: 1.2rem;
  }
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    gap: 1.6rem;
  }
`
const Content = styled(TransitionGroup)`
  display: grid;
  gap: 1.6rem;
  padding: 0 1.2rem 1.6rem;

  @media (min-width: ${BreakpointEnum.TABLET}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }
`
const Pagination = styled.aside`
  display: flex;
  justify-content: center;
`
const Scroll = styled(Scrollbars)`
  width: 100%;
`
const Actions = styled.div`
  padding: 0 1.2rem;
  display: grid;
  gap: 1.6rem;
  align-items: center;
`
export { Block, Content, Pagination, Actions, Scroll }
