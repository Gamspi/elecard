import React, { memo } from "react"
import * as StyledComponent from "./style"
import { useController } from "./controller"
import { DOTS } from "./config"
import { getUniqueId } from "@shared/lib/helpers/getUniqueId"

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
    handleNext,
    onPageChange,
    handlePrevious,
  } = useController(props)

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <StyledComponent.Block>
      <StyledComponent.Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        &#8592;
      </StyledComponent.Button>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <StyledComponent.Button disabled key={pageNumber + getUniqueId()}>
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
      <StyledComponent.Button onClick={handleNext} disabled={isLastPage}>
        &#8594;
      </StyledComponent.Button>
    </StyledComponent.Block>
  )
}

export const ButtonPagination = memo(Component)
