import React, { ComponentProps, memo } from "react"
import { StyledPage } from "@shared/ui/page/style"

type Props = ComponentProps<typeof StyledPage>
const Page = (props: Props) => {
  return <StyledPage {...props} />
}

export const Component = memo(Page)
