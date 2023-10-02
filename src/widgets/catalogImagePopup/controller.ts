import { useAppDispatch, useTypeSelector } from "@shared/lib"
import { CatalogModel } from "@entities/catalog"
import { useMemo, useRef } from "react"

export const useController = () => {
  const dispatch = useAppDispatch()
  const { currentItem, isOpenCurrentImage } = useTypeSelector(
    (state) => state.catalog,
  )
  const nodeRef = useRef(null)

  const handleToBack = () => {
    dispatch(CatalogModel.actions.updateIsOpenImage(false))
  }

  const removeCurrentItem = () =>
    dispatch(CatalogModel.actions.setCurrentItem(null))
  const isOpen = useMemo(
    () => !!currentItem && isOpenCurrentImage,
    [currentItem, isOpenCurrentImage],
  )
  return {
    isOpen,
    nodeRef,
    currentItem,
    handleToBack,
    removeCurrentItem,
  }
}
