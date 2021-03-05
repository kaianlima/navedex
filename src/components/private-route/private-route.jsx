import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { Route, Redirect } from "react-router-dom"

import { selectIsAuthenticated } from "../../redux/user/user.selectors"

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
})

export default connect(mapStateToProps)(PrivateRoute)
