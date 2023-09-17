import { createGlobalStyle } from "styled-components"
import { BreakpointEnum } from "@shared/lib/enums/BreakpointEnum"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
  }

  body {
    margin: 0;
    max-width: 100vw;
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    word-wrap: break-word;
    font-style: normal;
  }

  html {
    font-size: calc(100vw / ${BreakpointEnum.MOBILE} * 10);
    @media (min-width: ${BreakpointEnum.TABLET}px) {
      font-size: calc(100vw / ${BreakpointEnum.TABLET} * 10);
    }
    @media (min-width: ${BreakpointEnum.DESKTOP}px) {
      font-size: calc(100vw / ${BreakpointEnum.DESKTOP} * 10);
    }
    @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
      font-size: calc(100vw / ${BreakpointEnum.EXTRA_LARGE} * 10);
    }
    @media (min-width: ${BreakpointEnum.MAX}px) {
      font-size: 10px;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-height: 100vh;
    max-height: 100dvh;
  }

  input {
    outline: none;
  }

  button {
    outline: none;
    background: none;
    cursor: pointer;
  }
  body, button {
    color: ${({ theme }) => theme.color.blueGray};
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }

  main {
    flex-grow: 1;
  }

  li {
    list-style-type: none;
  }

  .portal {
    position: relative;
    z-index: 100;
  }
`
