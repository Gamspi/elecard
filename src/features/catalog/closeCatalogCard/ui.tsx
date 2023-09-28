import React, { memo } from "react"
import { Button } from "@shared/ui"
import { useCloseCatalogCard } from "@features/catalog/closeCatalogCard/contreller"
import { CatalogItem } from "@entities/catalog/model/types"

type Props = {
  id: CatalogItem["id"]
}
const CloseCatalogCard = ({ id }: Props) => {
  const { handleDelete } = useCloseCatalogCard(id)
  return (
    <Button.Icon onClick={handleDelete}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </Button.Icon>
  )
}

export const Component = memo(CloseCatalogCard)
