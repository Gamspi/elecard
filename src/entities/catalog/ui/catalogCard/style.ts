import styled from "styled-components"
import { Typography } from "@shared/ui"

const Block = styled.div`
  word-break: break-all;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 2.4rem;
  position: relative;

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
const Header = styled.div`
  position: relative;
  padding-top: 80%;
  overflow: hidden;
  border-radius: 2.4rem;
`
const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  flex-grow: 1;
  gap: 0.8rem;
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
  flex-wrap: wrap;
`
const Action = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Property = styled(Typography.Text)`
  display: flex;
  gap: 0.8rem;
  b {
    flex-shrink: 0;
  }
`
export {
  ImageContainer,
  Block,
  Header,
  Body,
  Action,
  Footer,
  Container,
  Property,
}
