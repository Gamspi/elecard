import React, { lazy, memo, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Catalog } from "@pages/catalog"
import { NotFoundPage } from "@pages/notFoundPage"

const Layout = lazy(() => import("../layout/index"))
const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Navigate to="catalog" />} />
        <Route
          path="catalog"
          element={
            <Suspense>
              <Catalog />
            </Suspense>
          }
        >
          <Route index element={<Navigate to="cards" />} />
          <Route path=":tab" element={null} />
        </Route>
        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export const Component = memo(AppRouter)
