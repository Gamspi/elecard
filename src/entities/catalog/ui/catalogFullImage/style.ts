import styled from "styled-components"

type StyledImageProps = {
  $isLoaded: boolean
}

const Container = styled.aside`
  padding: 1.6rem;
  display: grid;
`
const Image = styled.img<StyledImageProps>`
  grid-area: 1/1/1/1;
  justify-self: center;
  align-self: center;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 1.6rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.default};
  transition: opacity 0.3s ease-in;
  opacity: ${(props) => +props.$isLoaded};
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
export const style = {
  Container,
  Spinner,
  Image,
}
