import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import NaversOverviewContainer from "../../components/navers-overview/navers-overview.container"
import ErrorBoundary from "../../components/error-boundary/error-boundary"
import { fetchNaversStart } from "../../redux/naver/naver.actions"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "600",
  },
  buttonText: {
    fontWeight: "600",
  },
}))

const Homepage = ({ fetchNaversStart }) => {
  const classes = useStyles()

  React.useEffect(() => {
    fetchNaversStart()
  }, [fetchNaversStart])

  return (
    <main className={classes.root}>
      <Grid container direction="column" justify="center" spacing={5}>
        <Grid
          container
          item
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography className={classes.title} variant="h2">
              Navers
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={Link}
              to="/naver"
            >
              <span className={classes.buttonText}>Adicionar Naver</span>
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="center">
          <ErrorBoundary>
            <NaversOverviewContainer />
          </ErrorBoundary>
        </Grid>
      </Grid>
    </main>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchNaversStart: () => dispatch(fetchNaversStart()),
})

export default connect(null, mapDispatchToProps)(Homepage)
