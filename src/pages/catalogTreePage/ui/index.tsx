import React, { memo } from "react"
import { CatalogTreeList } from "@widgets/catalogTreeList"
import { Outlet } from "react-router-dom"
import { style as StyledComponent } from "./style"

const CatalogTreePage = () => {
  return (
    <StyledComponent.Container>
      <CatalogTreeList />
      <Outlet />
    </StyledComponent.Container>
  )
}

export default memo(CatalogTreePage)
