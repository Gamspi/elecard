import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  transition: color 0.15s ease-in;
  font-size: 1.6rem;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.color.blue}B2;
    }
  }
  &.active {
    color: ${({ theme }) => theme.color.blue};
    pointer-events: none;
  }
`
