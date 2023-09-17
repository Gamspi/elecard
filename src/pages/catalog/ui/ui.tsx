import React, { memo } from "react"
import { CatalogList } from "@widgets/catalogList"
import { style as StyledComponent } from "./style"
import { CatalogTreeList } from "@widgets/catalogTreeList"
import { Outlet } from "react-router-dom"
import { Typography } from "@shared/ui"

const Catalog = () => {
  return (
    <>
      <StyledComponent.Content>
        <Typography.Title>Catalog</Typography.Title>
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
