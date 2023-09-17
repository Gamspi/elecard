import React, { ComponentProps, memo } from "react"
import { StyledLink } from "./style"
import { NavLink } from "react-router-dom"

const CustomLink = (props: ComponentProps<typeof NavLink>) => {
  return <StyledLink {...props} />
}

export const Component = memo(CustomLink)
