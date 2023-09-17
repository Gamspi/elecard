import styled from "styled-components"

export const StyledCheckbox = styled.input`
  appearance: none;

  width: 1.6rem;
  height: 1.6rem;

  background: ${({ theme }) => theme.color.white};

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.blue};

  &::after {
    content: "";
    display: block;

    background: ${({ theme }) => theme.color.blue};

    width: 50%;
    height: 50%;

    opacity: 0;
    transition: opacity 0.15s ease-in;
    border-radius: 0.2rem;
  }

  &:checked::after {
    opacity: 1;
  }
`
