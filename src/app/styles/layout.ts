import styled from "styled-components"
import Scrollbars from "react-custom-scrollbars-2"

const styledMain = styled.div`
  height: 100%;
  display: grid;
  overflow: auto;
`

const styledWrapper = styled(Scrollbars)`
  max-width: 100vw;
  overflow-x: hidden;
  grid-area: 1/1/1/1;

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: opacity 300ms linear, transform 300ms linear;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 300ms linear, transform 300ms linear;
  }
`
const AppWrapper = styled.div`
  display: grid;
  overflow: hidden;
  height: 100vh;
  max-height: 100vh;
  max-height: 100dvh;
  grid-template-rows: auto 1fr auto;
`

export const style = { Main: styledMain, Container: styledWrapper, AppWrapper }
