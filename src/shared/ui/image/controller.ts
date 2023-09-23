import { useState } from "react"

export const useController = () => {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoad = () => {
    setIsLoading(false)
  }
  return {
    isLoading,
    handleLoad,
  }
}
