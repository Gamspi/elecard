import styled from "styled-components"

type StyledTextProps = {
  $size?: number
}
export const StyledText = styled.span<StyledTextProps>`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.8rem;
`
