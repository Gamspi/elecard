import { ExecutionContext, keyframes } from "styled-components"

export const spinnerAnimation = (props: ExecutionContext) => keyframes`
  0% {
    background-color: ${props.theme.color.blue};
  }
  10% {
    background-color: ${props.theme.color.turquoise};
  }
  20% {
    background-color: ${props.theme.color.lightGray};
  }
`
