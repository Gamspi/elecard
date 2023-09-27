import { useEffect } from "react"
import { CatalogModel } from "@entities/catalog"
import { useAppDispatch, useTypeSelector } from "@shared/lib"
export const useController = () => {
  const dispatch = useAppDispatch()
  const { isLoading } = useTypeSelector((state) => state.catalog)
  const fetchData = async () => {
    await dispatch(CatalogModel.actions.getCatalogList())
    dispatch(CatalogModel.actions.updateDeletedList())
  }
  useEffect(() => {
    void fetchData()
  }, [])
  return {
    isLoading,
  }
}
