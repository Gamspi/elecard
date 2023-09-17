import React, { ComponentProps, memo } from "react"
import { Button } from "@shared/ui"
import { useModel } from "../model"

type Props = ComponentProps<typeof Button.Primary>
const RefreshCatalogList = (props: Props) => {
  const { handelRefreshList } = useModel()
  return <Button.Primary {...props} onClick={handelRefreshList} />
}

export const Component = memo(RefreshCatalogList)
