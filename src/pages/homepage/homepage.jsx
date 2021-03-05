import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import NaverCard from "../../components/naver-card/naver-card"

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

const Homepage = () => {
  const classes = useStyles()

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
            <Button variant="contained" color="secondary" size="large">
              <span className={classes.buttonText}>Adicionar Naver</span>
            </Button>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <Grid item>
            <NaverCard />
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default Homepage
