import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { CatalogModel } from "@entities/catalog"

export const useModel = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { currentItem } = useTypeSelector((state) => state.catalog)
  const { id } = useParams()
  const handleToBack = () => navigate("/catalog")
  const fetchData = async () => {
    try {
      if (!id) throw new Error("id isn't valid")
      void dispatch(CatalogModel.actions.getCatalogItemById(+id))
    } catch (e) {
      navigate("/catalog")
    }
  }
  useEffect(() => {
    void fetchData()
  }, [])

  return {
    currentItem,
    handleToBack,
  }
}
