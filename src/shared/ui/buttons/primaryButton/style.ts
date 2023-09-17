import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

export const StyledButton = styled.button`
  font-size: 2.4rem;
  padding: 0.8rem;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.blue};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.blue}19;
  border-radius: 0.8rem;
  transition: border-color 0.15s ease-in, background-color 0.15s ease-in,
    color 0.15s ease-in;

  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    padding: 0.8rem 1.2rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.blue}66;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.blue};
    }
  }
`
