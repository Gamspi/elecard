import React, { ComponentProps, memo } from "react"
import { style as StyledComponent } from "./style"
import { useModel } from "../model"
import { CSSTransition } from "react-transition-group"
import { Spinner } from "@shared/ui"

type Props = Omit<ComponentProps<typeof StyledComponent.Content>, "$isLoaded">
const LoadingImage = (props: Props) => {
  const { isLoading, handelLoad } = useModel()
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
        onLoad={handelLoad}
      />
    </StyledComponent.Wrapper>
  )
}

export const Component = memo(LoadingImage)
