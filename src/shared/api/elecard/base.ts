import axios from "axios"
import { API_URL } from "@shared/config"

/**
 * Создание api каталога
 */
export const apiCatalogInstance = axios.create({
  baseURL: API_URL,
})
