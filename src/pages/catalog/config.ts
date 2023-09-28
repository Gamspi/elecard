import { CatalogList } from "@widgets/catalogList"
import { CatalogTreeList } from "@widgets/catalogTreeList"

export const tabs = new Map(
  Object.entries({
    cards: {
      label: "Cards",
      path: "cards",
      element: CatalogList,
    },
    tree: {
      label: "Tree",
      path: "tree",
      element: CatalogTreeList,
    },
  }),
)
