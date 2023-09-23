import React, { ComponentProps, memo } from "react"
import { style as StyledComponent } from "./style"
import { useController } from "./controller"
import { CSSTransition } from "react-transition-group"
import { Spinner } from "@shared/ui"

type Props = Omit<ComponentProps<typeof StyledComponent.Content>, "$isLoaded">
const LoadingImage = (props: Props) => {
  const { isLoading, handleLoad } = useController()
  return (
    <StyledComponent.Wrapper $objectFit={props.$objectFit}>
      <CSSTransition in={isLoading} timeout={300} mountOnEnter unmountOnExit>
        <StyledComponent.Spinner>
          <Spinner />
        </StyledComponent.Spinner>
      </CSSTransition>
      <StyledComponent.Content
        {...props}
        $isLoaded={!isLoading}
        onLoad={handleLoad}
      />
    </StyledComponent.Wrapper>
  )
}

export const Component = memo(LoadingImage)
