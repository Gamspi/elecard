import React, { memo } from "react"
import { Container, CustomLink, Page, Typography } from "@shared/ui"

const NotFoundPage = () => {
  return (
    <Page>
      <Container>
        <Typography.Title>404</Typography.Title>
        <Typography.Title level={3}>Page not found</Typography.Title>
        <CustomLink to="/">Go Main</CustomLink>
      </Container>
    </Page>
  )
}

export default memo(NotFoundPage)
