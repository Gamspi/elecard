import styled, { css } from "styled-components"

type StyledChildrenProps = {
  $isOpen: boolean
}
const Item = styled.li``
const Children = styled.ul<StyledChildrenProps>`
  overflow: hidden;
  max-width: fit-content;
  max-height: 0;
  margin-left: 2rem;
  border-left: 1px solid ${({ theme }) => theme.color.blue};
  ${(props) =>
    props.$isOpen &&
    css`
      max-height: inherit;
    `}
`
const ItemWrapper = styled.div`
  padding: 0.8rem 0.6rem;
  display: flex;
`

export { Item, Children, ItemWrapper }
