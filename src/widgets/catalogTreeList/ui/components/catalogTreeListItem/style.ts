import styled from "styled-components"
import { Link } from "react-router-dom"
import { Typography } from "@shared/ui"

const Block = styled.article`
  padding: 0.8rem 0.3rem;
  margin: 0 0.3rem;
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.3rem;
  min-width: 10rem;

  @media (hover: hover) {
    transition: background-color 0.15s ease-in;
    &:hover {
      background-color: ${({ theme }) => theme.color.blue}33;
    }
  }
`
const Action = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0.8rem 0.6rem;
  display: flex;
`
const Name = styled(Typography.Title)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
`
export const Style = {
  Block,
  Action,
  Name,
  Img,
}
