import { apiCatalogInstance } from "@shared/api/elecard/base"
import type { AxiosPromise } from "axios"
import { ResponseCatalogItem } from "@shared/api/elecard/models"

export const fetchCatalogList = (): AxiosPromise<ResponseCatalogItem[]> => {
  return apiCatalogInstance.get("catalog.json")
}
