import { useAppDispatch } from "@shared/lib"
import { CatalogModel } from "@entities/catalog"
import { CatalogItem } from "@entities/catalog/model/types"

export const useCloseCatalogCard = (id: CatalogItem["id"]) => {
  const dispatch = useAppDispatch()
  const handleDelete = () => {
    dispatch(CatalogModel.actions.deleteCatalogItem(id))
  }
  return {
    handleDelete,
  }
}
