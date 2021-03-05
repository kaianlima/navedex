import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import Header from "./components/header/header"
import Homepage from "./pages/homepage/homepage"
import LoginPage from "./pages/login/login"
import Spinner from "./components/spinner/spinner"
import ErrorBoundary from "./components/error-boundary/error-boundary"
import PrivateRoute from "./components/private-route/private-route"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.toolbar} />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <div className={classes.content}>
              <div className={classes.toolbar} />
              <PrivateRoute exact path="/" component={Homepage} />
              <Route exact path="/login" component={LoginPage} />
            </div>
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

export default App
