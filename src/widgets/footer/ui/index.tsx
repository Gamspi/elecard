import React, { memo } from "react"

import * as StyledComponent from "./style"
import { Box, Container } from "@shared/ui"

const Footer = () => {
  return (
    <StyledComponent.Block>
      <Container>
        <Box.Flex $justify="flex-end">
          This project was made by Nikolay Yushin
        </Box.Flex>
      </Container>
    </StyledComponent.Block>
  )
}

export const Component = memo(Footer)
