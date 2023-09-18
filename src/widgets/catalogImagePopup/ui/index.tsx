import React, { memo } from "react"
import { useModel as useCatalogImagePopupModel } from "../model"
import { style as StyledComponent } from "./style"
import { Portal } from "@shared/ui"

const CatalogImagePopup = () => {
  const { handelToBack, currentItem } = useCatalogImagePopupModel()
  return (
    <Portal>
      <StyledComponent.Container>
        <StyledComponent.Button onClick={handelToBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </StyledComponent.Button>
        <StyledComponent.Image
          src={currentItem?.image}
          alt={`${currentItem?.name}`}
          $objectFit="cover"
        />
      </StyledComponent.Container>
    </Portal>
  )
}

export const Component = memo(CatalogImagePopup)
