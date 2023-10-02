import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { CatalogItem } from "@entities/catalog/model/types"
import { CatalogModel } from "@entities/catalog"

export const useController = (id: CatalogItem["id"]) => {
  const dispatch = useAppDispatch()
  const { list } = useTypeSelector((state) => state.catalog)
  const handelOpenImage = () => {
    const item = list.find((item) => item.id.toString() === id.toString())
    if (item) {
      dispatch(CatalogModel.actions.setCurrentItem(item))
      dispatch(CatalogModel.actions.updateIsOpenImage(true))
    }
  }
  return {
    handelOpenImage,
  }
}
