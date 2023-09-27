import React, { memo } from "react"
import { style as StyledComponent } from "./style"
import { Outlet } from "react-router-dom"
import { Loader, Page, Typography } from "@shared/ui"
import { useController } from "../controller"

const Catalog = () => {
  const { isLoading } = useController()
  return (
    <Page>
      <Loader isLoading={isLoading} />
      <StyledComponent.Container>
        <StyledComponent.Header>
          <Typography.Title>Catalog</Typography.Title>
          <StyledComponent.Links>
            <StyledComponent.LinkItem to="cards">
              Cards
            </StyledComponent.LinkItem>
            <StyledComponent.LinkItem to="tree">Tree</StyledComponent.LinkItem>
          </StyledComponent.Links>
        </StyledComponent.Header>
        <StyledComponent.Body>
          <Outlet />
        </StyledComponent.Body>
      </StyledComponent.Container>
    </Page>
  )
}

export default memo(Catalog)
