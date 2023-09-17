import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useTypeSelector } from "@shared/lib"
import { CatalogItem } from "@entities/catalog/model/types"

export const useModel = () => {
  const navigate = useNavigate()
  const [item, setItem] = useState<CatalogItem | null>(null)
  const { list, isLoading } = useTypeSelector((state) => state.catalog)
  const { id } = useParams()
  const handelToBack = () => navigate("/catalog")
  useEffect(() => {
    /**
     * обернут в setTimeout, что юы обробатывался после запроса на сервер. когда будут получены данные
     */
    setTimeout(() => {
      if (!id) return navigate("/catalog")
      if (isLoading) return
      const item = list.find((item) => item.id.toString() === id)
      if (!item) return navigate("/catalog")
      setItem(item)
    })
  }, [id, isLoading, list, navigate])

  return {
    item,
    handelToBack,
  }
}
