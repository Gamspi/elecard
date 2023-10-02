import React, { memo } from "react"
import { style as StyledComponent } from "./style"
import { Loader, Typography } from "@shared/ui"
import { useController as useCatalogController } from "../controller"
import { CatalogImagePopup } from "@widgets/catalogImagePopup"

const Catalog = () => {
  const { isShowLoader, tab, tabArray } = useCatalogController()
  return (
    <StyledComponent.Page>
      <Loader isLoading={isShowLoader} />
      <StyledComponent.Container>
        <StyledComponent.Header>
          <Typography.Title>Catalog</Typography.Title>
          <StyledComponent.Links>
            {tabArray.map(([_, item]) => (
              <StyledComponent.LinkItem to={item.path} key={item.path}>
                {item.label}
              </StyledComponent.LinkItem>
            ))}
          </StyledComponent.Links>
        </StyledComponent.Header>

        <StyledComponent.Body>
          {tabArray.map(([_, item]) => (
            <StyledComponent.Tab $isActive={item.path === tab} key={item.path}>
              <item.element />
            </StyledComponent.Tab>
          ))}
        </StyledComponent.Body>
      </StyledComponent.Container>
      <CatalogImagePopup />
    </StyledComponent.Page>
  )
}

export default memo(Catalog)
