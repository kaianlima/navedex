import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import { store, persistor } from "./redux/store"

import App from "./App"

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#212121",
    },
    neutral: {
      main: "#99A8B2",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 0,
  },
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
)
