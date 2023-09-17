import styled from "styled-components"

type StyledProps = { $size?: number }
export const StyledButton = styled.button<StyledProps>`
  display: block;
  width: ${(props) => (props.$size ? props.$size * 0.4 : 2.4)}rem;
  height: ${(props) => (props.$size ? props.$size * 0.4 : 2.4)}rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  padding: 0.4rem;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.blue};
    object-fit: cover;
  }

  @media (hover: hover) {
    transition: transform 0.15s ease-in;
    svg {
      transition: fill 0.15s ease-in;
    }

    &:hover {
      transform: scale(1.3, 1.3);

      svg {
        fill: ${({ theme }) => theme.color.turquoise};
      }
    }
  }
`
