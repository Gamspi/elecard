import styled, { css } from "styled-components"
import { BreakpointEnum } from "@shared/lib"

type ButtonProps = {
  $isActive?: boolean
}

const Block = styled.div`
  display: inline-grid;
  gap: 1.6rem;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`
const Button = styled.button<ButtonProps>`
  font-size: 1.2rem;
  padding: 0.6rem 0.6rem;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.blue}19;
  border-radius: 50%;
  display: none;

  &:last-child,
  &:first-child {
    display: block;
  }

  ${(props) =>
    props.$isActive &&
    css`
      display: block;
      pointer-events: none;
      background-color: ${({ theme }) => theme.color.blue};
      color: ${({ theme }) => theme.color.white};
    `}
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
    background-color: ${({ theme }) => theme.color.gray};
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.blue}66;
    }
  }
  @media (min-width: ${BreakpointEnum.TABLET}px) {
    display: block;
  }
`
export { Block, Button }
