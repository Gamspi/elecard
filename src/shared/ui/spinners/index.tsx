import React, { memo, ReactElement } from "react"
import { Styled } from "./style"
import { BlADE_COUNT } from "@shared/ui/spinners/confug"

const Spinner = () => {
  const blades: ReactElement[] = []
  for (let i = 0; i < BlADE_COUNT; i++) {
    blades.push(<Styled.Blade key={i} />)
  }
  return <Styled.Spinner>{blades}</Styled.Spinner>
}

export const Component = memo(Spinner)
