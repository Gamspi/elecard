import React, { memo } from "react"
import { Container, Page, Typography } from "@shared/ui"

const MainPage = () => {
  return (
    <Page>
      <Container>
        <Typography.Title level={1}>Hello friend</Typography.Title>
      </Container>
    </Page>
  )
}

export default memo(MainPage)
