import styled from "styled-components"
import { Button as UiButton, Image } from "@shared/ui"
import { BreakpointEnum } from "@shared/lib"

const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.blue}33;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Button = styled(UiButton.Icon)`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  width: 4rem;
  height: 4rem;
  @media (min-width: ${BreakpointEnum.TABLET}px) {
    width: 8rem;
    height: 8rem;
  }
`
const styledImage = styled(Image)`
  border-radius: 1.6rem;
`
export const style = {
  Image: styledImage,
  Container,
  Button,
}
