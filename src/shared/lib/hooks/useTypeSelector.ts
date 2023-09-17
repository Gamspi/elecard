import { RootState } from "@app/store"
import { TypedUseSelectorHook, useSelector } from "react-redux"

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
