import React, { memo, useState } from "react"
import { style as StyledComponent } from "./style"
import { Spinner } from "@shared/ui"
import { CSSTransition } from "react-transition-group"

type Props = {
  src: string
}
const CatalogFullImage = ({ src }: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <StyledComponent.Container>
      <CSSTransition in={isLoading} timeout={3000} mountOnEnter unmountOnExit>
        <StyledComponent.Spinner>
          <Spinner />
        </StyledComponent.Spinner>
      </CSSTransition>
      <StyledComponent.Image
        $isLoaded={!isLoading}
        src={src}
        alt=""
        onLoad={() => setIsLoading(false)}
      />
    </StyledComponent.Container>
  )
}

export const Component = memo(CatalogFullImage)
