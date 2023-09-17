import React, { memo } from "react"
import { CatalogList } from "@widgets/catalogList"
import { style as StyledComponent } from "./style"
import { CatalogTreeList } from "@widgets/catalogTreeList"
import { Outlet } from "react-router-dom"

const Catalog = () => {
  return (
    <>
      <StyledComponent.Content>
        <StyledComponent.TreeList autoHide>
          <CatalogTreeList />
        </StyledComponent.TreeList>
        <StyledComponent.List>
          <CatalogList />
        </StyledComponent.List>
      </StyledComponent.Content>
      <Outlet />
    </>
  )
}

export default memo(Catalog)
