import React, { lazy, memo, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "@pages/main"
import { Catalog } from "@pages/catalog"
import { CatalogDetail } from "@pages/catalogDetail"
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
        <Route
          index
          element={
            <Suspense>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="catalog"
          element={
            <Suspense>
              <Catalog />
            </Suspense>
          }
        >
          <Route
            path=":id"
            element={
              <Suspense>
                <CatalogDetail />
              </Suspense>
            }
          />
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
