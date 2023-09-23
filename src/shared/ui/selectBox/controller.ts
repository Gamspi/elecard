import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { SelectOption } from "@shared/ui/selectBox/lib"

type ControllerProps = {
  value: string | number
  options: SelectOption[]
}
export const useController = ({ value, options }: ControllerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggleIsOpen = () => {
    setIsOpen((prev) => !prev)
  }
  const currentOption = useMemo(() => {
    return options.find((item) => item.code === value)
  }, [options, value])

  const handleBodyClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest(".j-select") === containerRef.current) return
    setIsOpen(false)
    document.removeEventListener("click", handleBodyClick)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [value])
  useEffect(() => {
    if (isOpen) return document.addEventListener("click", handleBodyClick)
    return document.removeEventListener("click", handleBodyClick)
  }, [handleBodyClick, isOpen])
  return {
    isOpen,
    containerRef,
    currentOption,
    handleToggleIsOpen,
  }
}
