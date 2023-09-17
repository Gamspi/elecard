import styled, { css } from "styled-components"
import { Typography } from "@shared/ui"
import folderIcon from "../../../assets/folder.svg"
import openFolderIcon from "../../../assets/openFolder.svg"

type StyledBlockProps = {
  $isActive?: boolean
}
const Block = styled.button<StyledBlockProps>`
  display: grid;
  grid-template-columns: repeat(2, auto);
  padding: 0.8rem 0.6rem;
  text-transform: capitalize;
  gap: 0.6rem;

  &:before,
  &:after {
    grid-area: 1/1/1/1;
    content: "";
    display: block;
    height: 1.6rem;
    width: 1.6rem;
  }

  &:before {
    background: url("${folderIcon}") center/contain no-repeat;
  }

  &:after {
    opacity: 0;
    background: url("${openFolderIcon}") center/contain no-repeat;
  }

  @media (hover: hover) {
    transition: color 0.15s ease-in;

    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }

  ${(props) =>
    props.$isActive &&
    css`
      &:before {
        opacity: 0;
      }

      &:after {
        opacity: 1;
      }
    `}
`
const Title = styled(Typography.Title)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export { Block, Title }
