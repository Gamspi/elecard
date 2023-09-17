import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./store"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import React from "react"

test("renders learn react link", () => {
  const { queryByText } = render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  )

  expect(queryByText("Learn")).toBeInTheDocument()
})
