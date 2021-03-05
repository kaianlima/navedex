import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

import { ReactComponent as Logo } from "../../assets/logo-nave.svg"
import { selectIsAuthenticated } from "../../redux/user/user.selectors"
import { logoutStart } from "../../redux/user/user.actions"

const useStyles = makeStyles((theme) => ({
  toolbarGutter: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(3),
  },
  logo: {
    flexGrow: 1,
  },
  linkHome: {
    color: "inherit",
    textDecoration: "inherit",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const Header = ({ isAuthenticated, logoutStart }) => {
  const classes = useStyles()

  return (
    <>
      {isAuthenticated ? (
        <div>
          <AppBar position="fixed" className={classes.appBar} elevation={0}>
            <Toolbar className={classes.toolbarGutter} disableGutters>
              <Box className={classes.logo}>
                <Link className={classes.linkHome} to="/">
                  <Logo />
                </Link>
              </Box>
              <Button color="inherit" onClick={logoutStart}>
                Sair
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      ) : null}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
})

const mapDispatchToProps = (dispatch) => ({
  logoutStart: () => dispatch(logoutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
