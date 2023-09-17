import { useState } from "react"

export const useController = () => {
  const [isLoading, setIsLoading] = useState(true)
  const handelLoad = () => {
    setIsLoading(false)
  }
  return {
    isLoading,
    handelLoad,
  }
}
