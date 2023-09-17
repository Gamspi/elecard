import React, { memo } from "react"
import { Container, Page, Typography } from "@shared/ui"
import { style as StyledComponent } from "./style"

const MainPage = () => {
  return (
    <Page>
      <StyledComponent.Container>
        <Typography.Title level={1}>Hello friend 🖖</Typography.Title>
        <Typography.Title level={5}>
          I hope you like my project 😇
        </Typography.Title>
        <Typography.Title level={6}>Main stack:</Typography.Title>
        <Typography.List>
          <li>React</li>
          <li>Redux-toolkit</li>
          <li>Styled components</li>
          <li>React transition group - for animation</li>
        </Typography.List>
        <Typography.Title level={6}>
          * You need to go to the catalog page
        </Typography.Title>
      </StyledComponent.Container>
    </Page>
  )
}

export default memo(MainPage)
