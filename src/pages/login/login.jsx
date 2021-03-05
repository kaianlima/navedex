import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import LoginForm from "../../components/login-form/login-form"
import { ReactComponent as Logo } from "../../assets/logo-nave-large.svg"
import { selectIsAuthenticated } from "../../redux/user/user.selectors"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "8rem",
  },
  container: {
    minWidth: "20rem",
    maxWidth: "28rem",
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  formContainer: {
    minHeight: "20rem",
    maxHeight: "20rem",
  },
}))

const Login = ({ isAuthenticated }) => {
  const classes = useStyles()
  const history = useHistory()

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push("/")
    }
  }, [history, isAuthenticated])

  return (
    <main className={classes.root}>
      <Grid container direction="column" item alignItems="center">
        <Grid
          className={classes.container}
          container
          direction="column"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Logo />
            </Grid>
          </Grid>
          <Grid
            className={classes.formContainer}
            container
            alignItems="center"
            item
            xs={12}
            spacing={3}
          >
            <Grid item xs={12}>
              <LoginForm />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
})

export default connect(mapStateToProps)(Login)
