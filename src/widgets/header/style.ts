import styled from "styled-components"

const styledNav = styled.nav`
  display: flex;
  gap: 1.5rem;
  text-transform: capitalize;
`
const styledBlock = styled.header`
  padding: 1.6rem;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  border-radius: 0 0 0.8rem 0.8rem;
  box-shadow: 0.3rem 0.4rem 0.4rem rgba(1, 0, 44, 0.25);
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  z-index: 10;
`
const styledLogo = styled.img`
  object-fit: contain;
  width: 3rem;
  height: 3rem;
`

export const headerStyled = {
  Nav: styledNav,
  Block: styledBlock,
  Logo: styledLogo,
}
