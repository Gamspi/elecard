import React, { memo } from "react"
import { Container, Page, Typography } from "@shared/ui"

const Ui = () => {
  return (
    <Page>
      <Container>
        <Typography.Title level={1}>Hello friend</Typography.Title>
      </Container>
    </Page>
  )
}

export default memo(Ui)
