import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import NaversOverview from "../../components/navers-overview/navers-overview"
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
            <Box>
              <Typography className={classes.title} variant="h2">
                Navers
              </Typography>
            </Box>
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
        <Grid container item xs={12}>
          <NaversOverview />
        </Grid>
      </Grid>
    </main>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchNaversStart: () => dispatch(fetchNaversStart()),
})

export default connect(null, mapDispatchToProps)(Homepage)
