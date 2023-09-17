import { OptionType } from "./lib/types"
import { CatalogSortEnum } from "./lib/enum"

export const filters: OptionType[] = [
  {
    code: CatalogSortEnum.CATEGORY,
    label: "Category",
  },
  {
    code: CatalogSortEnum.DATE,
    label: "Date",
  },
  {
    code: CatalogSortEnum.NAME,
    label: "Name",
  },
  {
    code: CatalogSortEnum.SIZE,
    label: "Size",
  },
]
