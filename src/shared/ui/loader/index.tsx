import React, { memo, useRef } from "react"
import { style as StyledComponent } from "./style"
import { Box, Spinner } from "@shared/ui"
import { CSSTransition } from "react-transition-group"
import { Portal } from "@shared/ui"

type Props = {
  isLoading: boolean
}

const LoaderLayout = ({ isLoading }: Props) => {
  const ref = useRef(null)
  return (
    <CSSTransition
      in={isLoading}
      timeout={300}
      mountOnEnter
      unmountOnExit
      nodeRef={ref}
    >
      <>
        <Portal>
          <StyledComponent.Block ref={ref}>
            <Box.Flex $justify="center" $align="center">
              <Spinner />
            </Box.Flex>
          </StyledComponent.Block>
        </Portal>
      </>
    </CSSTransition>
  )
}

export const Component = memo(LoaderLayout)
