import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { CatalogModel } from "@entities/catalog"
import { LAST_PARAMS_PATH_REGEX } from "@widgets/catalogImagePopup/config"

export const useController = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const { currentItem, errors } = useTypeSelector((state) => state.catalog)
  const { id } = useParams()

  const goBack = () => {
    navigate(pathname.replace(LAST_PARAMS_PATH_REGEX, ""))
  }
  const handleToBack = () => {
    goBack()
    dispatch(CatalogModel.actions.setCurrentItem(null))
  }
  const fetchData = async () => {
    if (!id) throw new Error("id isn't valid")
    await dispatch(CatalogModel.actions.getCatalogItemById(id))
  }
  useEffect(() => {
    if (!errors.fetchItem) return
    dispatch(CatalogModel.actions.resetError("fetchItem"))
    goBack()
  }, [errors])
  useEffect(() => {
    void fetchData()
  }, [])

  return {
    currentItem,
    handleToBack,
  }
}
