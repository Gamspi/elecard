import { useAppDispatch } from "@shared/lib"
import { CatalogModel } from "@entities/catalog"

export const useModel = () => {
  const dispatch = useAppDispatch()
  const handleRefreshList = () => {
    dispatch(CatalogModel.actions.refreshCatalogList())
    dispatch(CatalogModel.actions.getCatalogList())
  }
  return {
    handleRefreshList,
  }
}
