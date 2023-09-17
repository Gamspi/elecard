import styled from "styled-components"

export const StyledPrimaryInput = styled.input`
  font-size: 2.4rem;
  padding: 0.8rem;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.color.blue}1A;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.blue}66;
  }

  &:active {
    background-color: ${({ theme }) => theme.color.blue}33;
  }
`
