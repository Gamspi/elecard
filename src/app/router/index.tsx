import React, { lazy, memo, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { Catalog } from "@pages/catalog"
import { CatalogDetail } from "@pages/catalogDetail"
import { NotFoundPage } from "@pages/notFoundPage"
import { CatalogCardPage } from "@pages/catalogCardPage"
import { CatalogTreePage } from "@pages/catalogTreePage"

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
          <Route
            path="cards"
            element={
              <Suspense>
                <CatalogCardPage />
              </Suspense>
            }
          />
          <Route
            path="tree"
            element={
              <Suspense>
                <CatalogTreePage />
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
