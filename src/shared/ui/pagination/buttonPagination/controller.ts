import { useMemo } from "react"
import { DOTS } from "./config"

type ControllerProps = {
  totalPageCount: number
  siblingCount?: number
  currentPage: number
  onChange: (page: number) => void
}
export const useController = ({
  onChange,
  currentPage,
  siblingCount = 1,
  totalPageCount,
}: ControllerProps) => {
  const onPageChange = (n: number) => onChange(n)
  const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({ length }, (_, idx) => idx + start)
  }
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount + 5
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)

    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    )

    let siblinItemCount = 3 + 2 * siblingCount

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftRange = range(1, siblinItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightRange = range(
        totalPageCount - siblinItemCount + 1,
        totalPageCount,
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
    return []
  }, [siblingCount, totalPageCount, currentPage])
  const handelNext = () => onPageChange(currentPage + 1)

  const handelPrevious = () => onPageChange(currentPage - 1)

  let isLastPage = paginationRange[paginationRange.length - 1] === currentPage

  const isActive = (pageNumber: number) => pageNumber === currentPage
  return {
    isLastPage,
    paginationRange,
    isActive,
    handelNext,
    onPageChange,
    handelPrevious,
  }
}
