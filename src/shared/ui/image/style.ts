import styled, { css } from "styled-components"
import { CSSProperties } from "react"

type StyledWrapperProps = {
  $objectFit?: CSSProperties["objectFit"]
}
type StyledImageProps = {
  $isLoaded: boolean
  $objectFit?: CSSProperties["objectFit"]
}
const Wrapper = styled.div<StyledWrapperProps>`
  display: grid;
  position: relative;
  ${(props) =>
    props.$objectFit === "cover" &&
    css`
      width: 100%;
      height: 100%;
    `};
`
const Spinner = styled.div`
  grid-area: 1/1/1/1;
  justify-self: center;
  align-self: center;
  margin-left: 2rem;

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
const Content = styled.img<StyledImageProps>`
  max-width: 100%;
  max-height: 100%;
  grid-area: 1/1/1/1;
  justify-self: center;
  align-self: center;
  transition: opacity 0.3s ease-in;
  opacity: ${(props) => +props.$isLoaded};
  object-fit: ${(props) => props.$objectFit || "inhered"};
  ${(props) =>
    props.$objectFit === "cover" &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `};
`
export const style = {
  Content,
  Wrapper,
  Spinner,
}
