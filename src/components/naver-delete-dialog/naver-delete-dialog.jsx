import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import Button from "@material-ui/core/Button"

import {
  selectNaverDeleteDialogOpen,
  selectNaverDetailDialogOpen,
} from "../../redux/dialog/dialog.selectors"
import {
  toggleNaverDeleteDialog,
  toggleNaverDetailDialog,
} from "../../redux/dialog/dialog.actions"
import { deleteNaverStart } from "../../redux/naver/naver.actions"

const useStyles = makeStyles({
  dialogTitle: {
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
    overflow: "hidden",
  },
})

const NaverDeleteDialog = ({
  naver,
  naverDeleteDialogOpen,
  naverDetailDialogOpen,
  toggleNaverDeleteDialog,
  toggleNaverDetailDialog,
  deleteNaverStart,
}) => {
  const classes = useStyles()

  return (
    <>
      {naver ? (
        <Dialog
          open={naverDeleteDialogOpen}
          onClose={toggleNaverDeleteDialog}
          aria-labelledby="naver-delete-dialog"
          maxWidth="sm"
          fullWidth
          classes={{ paper: classes.dialogPaper }}
        >
          <DialogTitle>Excluir Naver</DialogTitle>
          <DialogContent className={classes.dialogContent}>
            <Grid container direction="column" spacing={2}>
              <Grid container item>
                <DialogContentText>
                  Tem certeza que deseja excluir este Naver?
                </DialogContentText>
              </Grid>
              <Grid container item justify="flex-end" spacing={3}>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={toggleNaverDeleteDialog}
                  >
                    <span className={classes.buttonText}>Cancelar</span>
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    fullWidth
                    onClick={() => {
                      deleteNaverStart(naver.id)
                      toggleNaverDeleteDialog()

                      if (naverDetailDialogOpen) {
                        toggleNaverDetailDialog()
                      }
                    }}
                  >
                    <span className={classes.buttonText}>Excluir</span>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions />
        </Dialog>
      ) : null}
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  naverDeleteDialogOpen: selectNaverDeleteDialogOpen,
  naverDetailDialogOpen: selectNaverDetailDialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDeleteDialog: () => dispatch(toggleNaverDeleteDialog()),
  toggleNaverDetailDialog: () => dispatch(toggleNaverDetailDialog()),
  deleteNaverStart: (naverId) => dispatch(deleteNaverStart(naverId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NaverDeleteDialog)
