import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 100%;
  flex-grow: 1;

  @media (min-width: ${BreakpointEnum.TABLET}px) {
    gap: 1.2rem;
  }
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    gap: 1.6rem;
  }
`
const Content = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-auto-rows: auto;

  @media (min-width: ${BreakpointEnum.TABLET}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${BreakpointEnum.DESKTOP}px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
  }
  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${BreakpointEnum.PRE_MAX}px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: ${BreakpointEnum.MAX}px) {
    grid-template-columns: repeat(6, 1fr);
  }
`
const Pagination = styled.aside`
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 0 0 1.6rem;
  flex-grow: 1;
`
const Actions = styled.div`
  padding: 0 1.2rem;
  display: grid;
  gap: 1.6rem;
  align-items: center;
`
export const style = { Block, Content, Pagination, Actions, Wrapper }
