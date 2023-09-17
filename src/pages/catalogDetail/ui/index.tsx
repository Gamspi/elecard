import React, { memo } from "react"
import { CatalogImagePopup } from "@widgets/catalogImagePopup"

const CatalogDetail = () => {
  return (
    <>
      <CatalogImagePopup />
    </>
  )
}

export default memo(CatalogDetail)
