import styled, { css } from "styled-components"
import { Container } from "@shared/ui"
import { NavLink } from "react-router-dom"

const styledContainer = styled(Container)`
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const Body = styled.div`
  min-height: 100%;
  flex-grow: 1;
  display: grid;
`

type TapProps = {
  $isActive: boolean
}
const Tab = styled.div<TapProps>`
  grid-area: 1/1/1/1;
  visibility: hidden;
  max-height: 0;
  overflow: hidden;
  ${(props) =>
    props.$isActive &&
    css`
      flex-direction: column;
      visibility: visible;
      max-height: inherit;
    `}
`
const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
`
const Links = styled.div`
  justify-self: center;
  display: flex;
  gap: 2.4rem;
`
const LinkItem = styled(NavLink)`
  font-size: 2.2rem;
  line-height: 2.4rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.8rem;

  &:before,
  &:after {
    content: "";
    display: block;
    grid-area: 1/1/1/1;
    box-sizing: border-box;
    align-self: center;
    justify-self: center;
    border-radius: 50%;
  }
  &:before {
    width: 1rem;
    height: 1rem;
    border: 1px solid ${({ theme }) => theme.color.blue};
  }
  &:after {
    transform: scale(0, 0);
    background: ${({ theme }) => theme.color.blue};
    width: 0.6rem;
    height: 0.6rem;
    transition: transform 0.3s ease-in;
  }
  &.active {
    pointer-events: none;
    &:after {
      transform: scale(1, 1);
    }
  }
`
export const style = {
  Tab,
  Body,
  Header,
  Links,
  LinkItem,
  Container: styledContainer,
}
