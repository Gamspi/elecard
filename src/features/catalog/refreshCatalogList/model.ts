import { useAppDispatch } from "@shared/lib"
import { CatalogModel } from "@entities/catalog"

export const useController = () => {
  const dispatch = useAppDispatch()
  const handleRefreshList = () => {
    dispatch(CatalogModel.actions.refreshCatalogList())
    dispatch(CatalogModel.actions.getCatalogList())
  }
  return {
    handleRefreshList,
  }
}
