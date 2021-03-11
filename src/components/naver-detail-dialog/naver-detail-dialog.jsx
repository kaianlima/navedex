import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Dialog from "@material-ui/core/Dialog"

import NaverDetailDialogContentContainer from "../naver-detail-dialog-content/naver-detail-dialog-content.container"
import ErrorBoundary from "../../components/error-boundary/error-boundary"
import { selectNaverDetailDialogOpen } from "../../redux/dialog/dialog.selectors"
import { toggleNaverDetailDialog } from "../../redux/dialog/dialog.actions"

const useStyles = makeStyles({
  dialogPaper: {
    minWidth: "80vw",
    maxWidth: "80vw",
    minHeight: "60vh",
    maxHeight: "60vh",
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
    <Dialog
      open={naverDetailDialogOpen}
      onClose={toggleNaverDetailDialog}
      aria-labelledby="naver-detail-dialog"
      classes={{ paper: classes.dialogPaper }}
    >
      <ErrorBoundary>
        <NaverDetailDialogContentContainer
          naver={naver}
          toggleNaverDetailDialog={toggleNaverDetailDialog}
        />
      </ErrorBoundary>
    </Dialog>
  )
}
const mapStateToProps = createStructuredSelector({
  naverDetailDialogOpen: selectNaverDetailDialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDetailDialog: () => dispatch(toggleNaverDetailDialog()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NaverDetailDialog)
