import { useState } from "react"

export const useModel = () => {
  const [isLoading, setIsLoading] = useState(true)
  const handelLoad = () => {
    setIsLoading(false)
  }
  return {
    isLoading,
    handelLoad,
  }
}
