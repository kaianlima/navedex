import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "auto",
  },
}))

const Spinner = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container justify="center">
      <CircularProgress color="secondary" />
    </Grid>
  )
}

export default Spinner
