import React, { memo } from "react"
import { CustomLink, Container, Box } from "@shared/ui"
import logo from "@shared/assets/logo.svg"
import { headerStyled as StyledComponent } from "./style"
import { lickList } from "./config"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <StyledComponent.Block>
      <Container>
        <Box.Flex $gap={1.6} $align="center">
          <Link to="/">
            <StyledComponent.Logo src={logo} />
          </Link>
          <Box.Flex $gap={1.6}>
            {lickList.map((item) => (
              <CustomLink to={item.path} key={item.path}>
                {item.label}
              </CustomLink>
            ))}
          </Box.Flex>
        </Box.Flex>
      </Container>
    </StyledComponent.Block>
  )
}

export const Component = memo(Header)
