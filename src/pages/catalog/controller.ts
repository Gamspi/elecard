import { useEffect, useMemo } from "react"
import { CatalogModel } from "@entities/catalog"
import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { useNavigate, useParams } from "react-router-dom"
import { tabs } from "@pages/catalog/config"
export const useController = () => {
  const navigate = useNavigate()
  const { tab, id } = useParams()
  const dispatch = useAppDispatch()
  const { isLoading } = useTypeSelector((state) => state.catalog)
  const fetchData = async () => {
    await dispatch(CatalogModel.actions.getCatalogList())
    dispatch(CatalogModel.actions.updateDeletedList())
  }
  const tabArray = [...tabs]
  const isShowLoader = useMemo(() => {
    return isLoading && !id
  }, [id, isLoading])
  useEffect(() => {
    const isExistTab = tab && tabs.get(tab)
    if (!isExistTab) navigate("/catalog/cards")
  }, [navigate, tab])
  useEffect(() => {
    void fetchData()
  }, [])
  return {
    tab,
    tabArray,
    isShowLoader,
  }
}
