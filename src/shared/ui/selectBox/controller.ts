import React, { useEffect, useMemo, useRef, useState } from "react"
import { SelectOption } from "@shared/ui/selectBox/lib"

type ArrgsItem = {
  value: string | number
  options: SelectOption[]
}
export const useController = ({ value, options }: ArrgsItem) => {
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const handelToggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const currentOption = useMemo(() => {
    return options.find((item) => item.code === value)
  }, [options, value])
  useEffect(() => {
    setIsOpen(false)
  }, [value])
  return {
    isOpen,
    listRef,
    currentOption,
    handelToggleIsOpen,
  }
}
