import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

import DeleteIconButton from "../delete-icon-button/delete-icon-button"
import EditIconButton from "../edit-icon-button/edit-icon-button"

import { dateToNowInYears, dateISOToNowDistance } from "../../utils/time"

const useStyles = makeStyles({
  media: {
    height: "60vh",
    width: "100%",
    objectFit: "cover",
    bottom: 0,
  },
  dialogTitle: {
    fontWeight: 600,
  },
  dialogCloseIcon: {
    marginTop: "1rem",
    marginRight: "1rem",
  },
  dialogContent: {
    height: "90%",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    overflow: "hidden",
  },
})

const NaverDetailDialogContent = ({ naver, toggleNaverDetailDialog }) => {
  const classes = useStyles()

  console.log(naver)
  return (
    <Grid container item>
      <Grid item xs={6}>
        <img
          className={classes.media}
          src={naver.url}
          alt={`Naver ${naver.name}`}
        />
      </Grid>

      <Grid item xs={6}>
        <Grid container justify="flex-end">
          <Grid className={classes.dialogCloseIcon} item>
            <IconButton size="small" onClick={toggleNaverDetailDialog}>
              <CloseIcon color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          className={classes.dialogContent}
          container
          direction="column"
          justify="space-between"
        >
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography
                className={classes.dialogTitle}
                variant="h5"
                component="h2"
                gutterBottom
              >
                {naver.name}
              </Typography>
              <Typography variant="body1" color="secondary" component="p">
                {naver.job_role}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.dialogTitle}
                variant="body1"
                color="secondary"
                component="p"
                gutterBottom
              >
                Idade
              </Typography>
              <Typography variant="body1" color="secondary" component="p">
                {dateToNowInYears(naver.birthdate)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.dialogTitle}
                variant="body1"
                color="secondary"
                component="p"
                gutterBottom
              >
                Tempo de empresa
              </Typography>
              <Typography variant="body1" color="secondary" component="p">
                {dateISOToNowDistance(naver.admission_date)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.dialogTitle}
                variant="body1"
                color="secondary"
                component="p"
                gutterBottom
              >
                Projetos que participou
              </Typography>
              <Typography variant="body1" color="secondary" component="p">
                {naver.project}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <DeleteIconButton naver={naver} />
            </Grid>
            <Grid item>
              <EditIconButton naver={naver} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NaverDetailDialogContent
