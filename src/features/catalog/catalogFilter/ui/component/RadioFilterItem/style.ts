import styled, { css } from "styled-components"
import shortArrow from "@shared/assets/shortArrow.svg"

type StyledProps = {
  $isActive?: boolean
}

const Container = styled.li<StyledProps>`
  transition: color 0.15s ease-in;

  ${(props) =>
    props.$isActive
      ? css`
          color: ${props.theme.color.blue};
        `
      : css`
          @media (hover: hover) {
            &:hover {
              color: ${(props) => props.theme.color.blue}66;
            }
          }
        `}
`
const Wrapper = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
`
const Checkbox = styled.input<StyledProps>`
  opacity: ${(props) => +!!props.$isActive};
  appearance: none;

  width: 1.6rem;
  height: 1.6rem;
  background: url("${shortArrow}") center/ cover no-repeat;
  transition: transform 0.15s ease-in, opacity 0.15s ease-in;

  &:checked {
    transform: rotate(180deg);
  }
`
export const style = {
  Checkbox,
  Container,
  Wrapper,
}
