import styled from "styled-components"
import { Button as UiButton, Image } from "@shared/ui"
import { BreakpointEnum } from "@shared/lib"

const Container = styled.aside`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.blue}33;
  position: fixed;
`

const Body = styled.div`
  display: flex;
  height: 100%;
  min-height: fit-content;
  width: 100%;
  justify-content: center;
  overflow: auto;
  padding: 1.6rem;
`
const Button = styled(UiButton.Icon)`
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  width: 3rem;
  height: 3rem;
  @media (min-width: ${BreakpointEnum.TABLET}px) {
    width: 4rem;
    height: 4rem;
  }
`
const styledImage = styled(Image)`
  border-radius: 1.6rem;
  margin: 1.6rem auto;
`
export const style = {
  Image: styledImage,
  Container,
  Button,
  Body,
}
