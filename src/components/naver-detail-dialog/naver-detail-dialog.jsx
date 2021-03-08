import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Dialog from "@material-ui/core/Dialog"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"

import DeleteIconButton from "../delete-icon-button/delete-icon-button"
import EditIconButton from "../edit-icon-button/edit-icon-button"
import { selectNaverDetailDialogOpen } from "../../redux/dialog/dialog.selectors"
import { toggleNaverDetailDialog } from "../../redux/dialog/dialog.actions"
import { dateToNowInYears, dateToNowDistance } from "../../utils/time"

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
  dialogPaper: {
    minWidth: "80vw",
    maxWidth: "80vw",
    minHeight: "60vh",
    maxHeight: "60vh",
    overflow: "hidden",
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

const NaverDetailDialog = ({
  naver,
  naverDetailDialogOpen,
  toggleNaverDetailDialog,
}) => {
  const classes = useStyles()

  return (
    <div>
      {naver ? (
        <Dialog
          open={naverDetailDialogOpen}
          onClose={toggleNaverDetailDialog}
          aria-labelledby="naver-detail-dialog"
          classes={{ paper: classes.dialogPaper }}
        >
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
                      {dateToNowDistance(naver.admission_date)}
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
                    <DeleteIconButton id={naver.id} />
                  </Grid>
                  <Grid item>
                    <EditIconButton />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      ) : null}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  naverDetailDialogOpen: selectNaverDetailDialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDetailDialog: () => dispatch(toggleNaverDetailDialog()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NaverDetailDialog)
