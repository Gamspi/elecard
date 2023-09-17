import React, { memo } from "react"
import * as StyledComponent from "./style"
import { useController } from "./controller"
import { DOTS } from "./config"

type Props = {
  totalPageCount: number
  currentPage: number
  onChange: (page: number) => void
  siblingCount?: number
}
const Component = (props: Props) => {
  const { currentPage } = props
  const {
    isLastPage,
    paginationRange,
    isActive,
    handelNext,
    onPageChange,
    handelPrevious,
  } = useController(props)

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <StyledComponent.Block>
      <StyledComponent.Button
        onClick={handelPrevious}
        disabled={currentPage === 1}
      >
        &#8592;
      </StyledComponent.Button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <StyledComponent.Button disabled key={pageNumber}>
              {DOTS}
            </StyledComponent.Button>
          )
        }
        return (
          <StyledComponent.Button
            onClick={() => onPageChange(+pageNumber)}
            $isActive={isActive(+pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </StyledComponent.Button>
        )
      })}
      <StyledComponent.Button onClick={handelNext} disabled={isLastPage}>
        &#8594;
      </StyledComponent.Button>
    </StyledComponent.Block>
  )
}

export const ButtonPagination = memo(Component)
