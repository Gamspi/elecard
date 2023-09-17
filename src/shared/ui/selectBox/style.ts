import styled from "styled-components"

type StyledProps = {
  $isOpen: boolean
}
type StyledItemProps = {
  $isActive: boolean
}
const Container = styled.div`
  position: relative;
  width: 13rem;
  display: inline-block;
  z-index: 1;
`

const Header = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  border-radius: 1.3rem;
  position: relative;
  z-index: 1;
  text-align: start;
  height: 3.9rem;
  font-size: 1.2rem;

  width: 12rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (hover: hover) {
    transition: color 0.15s ease-in;
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }
  color: ${(props) =>
    props.$isOpen ? props.theme.color.blue : props.theme.color.blueGray};
`
const Footer = styled.div<StyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: fit-content;
  border-radius: 1.3rem;
  padding: 3.7rem 0.4rem 0 0;
  transition: max-height 0.3s linear;
  max-height: ${(props) => (props.$isOpen ? 14.9 : 0)}rem;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.blue};
`
const Item = styled.button<StyledItemProps>`
  padding: 0.8rem;
  width: 100%;
  text-align: start;
  @media (hover: hover) {
    transition: color 0.15s ease-in;
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }
  color: ${(props) =>
    props.$isActive ? props.theme.color.blue : props.theme.color.blueGray};
`
const List = styled.div`
  max-height: 10rem;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.blue};
  }

  &::-webkit-scrollbar {
    width: 6px !important;
    height: 6px !important;
  }

  scrollbar-color: ${({ theme }) => theme.color.blue};
`
export const style = {
  Item,
  List,
  Footer,
  Header,
  Container,
}
