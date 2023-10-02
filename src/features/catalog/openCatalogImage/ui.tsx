import React, { memo, ReactElement } from "react"
import { useController as useOpenCatalogImageController } from "./controller"
import { CatalogItem } from "@entities/catalog/model/types"

type Props = {
  id: CatalogItem["id"]
  children: ReactElement
}
const OpenCatalogImage = ({ id, children }: Props) => {
  const { handelOpenImage } = useOpenCatalogImageController(id)
  return <button onClick={handelOpenImage}>{children}</button>
}

export const Component = memo(OpenCatalogImage)
