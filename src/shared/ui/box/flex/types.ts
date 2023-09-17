import { CSSProperties, ReactNode } from "react"

export type StyledPropType = {
  $direction?: CSSProperties["flexDirection"]
  $align?: CSSProperties["alignItems"]
  $justify?: CSSProperties["justifyContent"]
  $gap?: CSSProperties["gap"]
}
type ComponentPropType = {
  children?: ReactNode
}
export type PropType = ComponentPropType & StyledPropType
