import styled from "styled-components"
import { spinnerAnimation } from "@shared/ui/spinners/style/animation"

const Spinner = styled.div`
  font-size: 28px;
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 6rem;
`
const Blade = styled.div`
  background-color: #E8F0F8;
  position: absolute;
  left: 0.4629em;
  bottom: 0;
  width: .4rem;
  height: 1.6rem;
  border-radius: 0.0555em;
  transform-origin: center -1.3rem;
  animation: ${spinnerAnimation} 1s infinite linear;

  &:nth-child(1) {
    animation-delay: 0s;
    transform: rotate(0deg);
  }

  &:nth-child(2) {
    animation-delay: 0.083s;
    transform: rotate(30deg);
  }

  &:nth-child(3) {
    animation-delay: 0.166s;
    transform: rotate(60deg);
  }

  &:nth-child(4) {
    animation-delay: 0.249s;
    transform: rotate(90deg);
  }

  &:nth-child(5) {
    animation-delay: 0.332s;
    transform: rotate(120deg);
  }

  &:nth-child(6) {
    animation-delay: 0.415s;
    transform: rotate(150deg);
  }

  &:nth-child(7) {
    animation-delay: 0.498s;
    transform: rotate(180deg);
  }

  &:nth-child(8) {
    animation-delay: 0.581s;
    transform: rotate(210deg);
  }

  &:nth-child(9) {
    animation-delay: 0.664s;
    transform: rotate(240deg);
  }

  &:nth-child(10) {
    animation-delay: 0.747s;
    transform: rotate(270deg);
  }

  &:nth-child(11) {
    animation-delay: 0.83s;
    transform: rotate(300deg);
  }

  &:nth-child(12) {
    animation-delay: 0.913s;
    transform: rotate(330deg);
  }
}
`
export const Styled = {
  Spinner,
  Blade,
}
