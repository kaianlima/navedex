import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"

import NaverFormContainer from "../../components/naver-form/naver-form.container"
import ErrorBoundary from "../../components/error-boundary/error-boundary"
import { selectNaverDetailDialogOpen } from "../../redux/dialog/dialog.selectors"
import { toggleNaverDetailDialog } from "../../redux/dialog/dialog.actions"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
  },
  container: {
    minWidth: "25rem",
    maxWidth: "35rem",
  },
  title: {
    fontWeight: "600",
  },
}))

const Naver = ({ match, naverDetailDialogOpen, toggleNaverDetailDialog }) => {
  const classes = useStyles()

  const title = match.params.id ? "Editar Naver" : "Adicionar Naver"

  React.useEffect(() => {
    if (naverDetailDialogOpen === true) {
      toggleNaverDetailDialog()
    }
  }, [naverDetailDialogOpen, toggleNaverDetailDialog])

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
          <Grid container item alignItems="center">
            <Grid item>
              <IconButton component={Link} to="/">
                <ArrowBackIosIcon color="secondary" />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h5" component="h2">
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item>
            <ErrorBoundary>
              <NaverFormContainer id={match.params.id} />
            </ErrorBoundary>
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

const mapStateToProps = createStructuredSelector({
  naverDetailDialogOpen: selectNaverDetailDialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDetailDialog: () => dispatch(toggleNaverDetailDialog()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Naver)
