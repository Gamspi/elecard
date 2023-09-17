import React, { memo, ReactElement, useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"

type Props = {
  children: ReactElement
}
const Portal = ({ children }: Props) => {
  const nodeElement = useMemo(() => document.createElement("div"), [])
  const bodyElement = useRef<HTMLElement | null>(null)
  useEffect(() => {
    bodyElement.current = document.querySelector("body")
    nodeElement.classList.add("portal")
    bodyElement.current?.appendChild(nodeElement)

    return () => {
      bodyElement.current?.removeChild(nodeElement)
    }
  }, [nodeElement])
  return <>{createPortal(children, nodeElement)}</>
}

export const Component = memo(Portal)
