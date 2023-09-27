import styled from "styled-components"
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
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
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
  &.active:after {
    transform: scale(1, 1);
  }
`
export const style = {
  Container: styledContainer,
  Body,
  Header,
  Links,
  LinkItem,
}
