import React, { memo } from "react"
import { useController as useCatalogImagePopupController } from "../controller"
import { style as StyledComponent } from "./style"
import { Portal } from "@shared/ui"
import { CSSTransition } from "react-transition-group"

const CatalogImagePopup = () => {
  const { handleToBack, currentItem, isOpen, nodeRef, removeCurrentItem } =
    useCatalogImagePopupController()
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
      onExited={removeCurrentItem}
    >
      <>
        <Portal>
          <StyledComponent.Container ref={nodeRef}>
            <StyledComponent.Button onClick={handleToBack}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </StyledComponent.Button>
            <StyledComponent.Body>
              <StyledComponent.Image
                src={currentItem?.image}
                alt={`${currentItem?.name}`}
                $objectFit="cover"
              />
            </StyledComponent.Body>
          </StyledComponent.Container>
        </Portal>
      </>
    </CSSTransition>
  )
}

export const Component = memo(CatalogImagePopup)
