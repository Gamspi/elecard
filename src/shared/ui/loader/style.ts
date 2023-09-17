import styled from "styled-components"

const Block = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.lightGray}b3;
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

export const style = {
  Block,
}
