import styled from "styled-components"
import { BreakpointEnum } from "@shared/lib"

export const StyledList = styled.ul`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  padding-left: 2rem;

  li {
    position: relative;

    &:before {
      position: absolute;
      right: 100%;
      top: 0;
      content: "";
      display: inline-block;
      border-radius: 50%;
      background: ${({ theme }) => theme.color.blue};
      width: 0.8rem;
      height: 0.8rem;
      margin: 0.6rem 1rem;
      justify-self: right;
    }

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }

  @media (min-width: ${BreakpointEnum.EXTRA_LARGE}px) {
    font-size: 2rem;
    line-height: 2.6rem;
    li:before {
      margin: 1rem 1rem;
    }
  }
`
