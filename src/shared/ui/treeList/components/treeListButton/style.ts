import styled from "styled-components"
import shortArrow from "@shared/assets/shortArrow.svg"

type StyledBlockProps = {
  $isActive?: boolean
}
const Block = styled.button<StyledBlockProps>`
  display: flex;
  padding: 0.8rem 0.6rem;

  &:before {
    content: "";
    display: block;
    height: 1.6rem;
    width: 1.6rem;
    background: url("${shortArrow}") center/contain no-repeat;
    margin-right: 0.8rem;
    transform: rotate(${(props) => (props.$isActive ? 0 : 180)}deg);
  }
`
export { Block }
