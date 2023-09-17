import { CatalogItem } from "@entities/catalog/model/types"
import { TreeListItem } from "@widgets/catalogTreeList/lib/types"

export function catalogTreeFormatter(item: CatalogItem): TreeListItem {
  return {
    id: item.id,
    name: item.name,
    src: item.image,
    list: [],
  }
}
