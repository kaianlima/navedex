import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

import { selectNaverFeedbackDialogOpen } from "../../redux/dialog/dialog.selectors"
import { selectFeedback } from "../../redux/naver/naver.selectors"
import { toggleNaverFeedbackDialog } from "../../redux/dialog/dialog.actions"

const useStyles = makeStyles({
  dialogTitle: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  title: {
    fontWeight: 600,
  },
  dialogPaper: {
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

const NaverFeedbackDialog = ({
  feedback,
  naverFeedbackDialogOpen,
  toggleNaverFeedbackDialog,
}) => {
  const classes = useStyles()

  return (
    <>
      {feedback ? (
        <Dialog
          open={naverFeedbackDialogOpen}
          onClose={toggleNaverFeedbackDialog}
          aria-labelledby="naver-feedback-dialog"
          maxWidth="sm"
          fullWidth
          classes={{ paper: classes.dialogPaper }}
        >
          <Grid container justify="space-between" spacing={2}>
            <Grid className={classes.dialogTitle} item>
              <DialogTitle className={classes.title}>
                {feedback.title}
              </DialogTitle>
            </Grid>
            <Grid className={classes.dialogCloseIcon} item>
              <IconButton size="small" onClick={toggleNaverFeedbackDialog}>
                <CloseIcon color="secondary" />
              </IconButton>
            </Grid>
          </Grid>

          <DialogContent>
            <DialogContentText>{feedback.content}</DialogContentText>
          </DialogContent>
          <DialogActions />
        </Dialog>
      ) : null}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  feedback: selectFeedback,
  naverFeedbackDialogOpen: selectNaverFeedbackDialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleNaverFeedbackDialog: () => dispatch(toggleNaverFeedbackDialog()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NaverFeedbackDialog)
