import React, { memo } from "react"
import { style as StyledComponent } from "./style"
import { Loader, Page, Typography } from "@shared/ui"
import { useController as useCatalogController } from "../controller"
import { tabs } from "@pages/catalog/config"
import { Outlet } from "react-router-dom"

const Catalog = () => {
  const { isShowLoader, tab } = useCatalogController()
  return (
    <Page>
      <Loader isLoading={isShowLoader} />
      <StyledComponent.Container>
        <StyledComponent.Header>
          <Typography.Title>Catalog</Typography.Title>
          <StyledComponent.Links>
            {[...tabs].map(([_, item]) => (
              <StyledComponent.LinkItem to={item.path} key={item.path}>
                {item.label}
              </StyledComponent.LinkItem>
            ))}
          </StyledComponent.Links>
        </StyledComponent.Header>
        <StyledComponent.Body>
          {[...tabs].map(([_, item]) => (
            <StyledComponent.Tab $isActive={item.path === tab} key={item.path}>
              <item.element />
            </StyledComponent.Tab>
          ))}
        </StyledComponent.Body>
      </StyledComponent.Container>
      <Outlet />
    </Page>
  )
}

export default memo(Catalog)
