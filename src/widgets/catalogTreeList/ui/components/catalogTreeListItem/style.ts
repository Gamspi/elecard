import styled from "styled-components"
import { Typography } from "@shared/ui"

const Block = styled.div`
  padding: 0.8rem 0.3rem;
  margin: 0 0.3rem 0 2rem;
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.3rem;
  max-width: fit-content;
`
const Property = styled(Typography.Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Img = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 0.3rem;
  object-fit: cover;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`
export const Style = {
  Img,
  Body,
  Block,
  Property,
}
