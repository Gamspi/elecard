import React, { ComponentProps, memo } from "react"
import { Button } from "@shared/ui"
import { useController as useButtonController } from "../model"

type Props = ComponentProps<typeof Button.Primary>
const RefreshCatalogList = (props: Props) => {
  const { handleRefreshList } = useButtonController()
  return <Button.Primary {...props} onClick={handleRefreshList} />
}

export const Component = memo(RefreshCatalogList)
