import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"

import TripForm from "../trip-form/trip-form"
import { selectTripDialogOpen } from "../../redux/dialog/dialog.selectors"
import { toggleTripDialog } from "../../redux/dialog/dialog.actions"

const TripDialog = ({ tripDialogOpen, toggleTripDialog }) => {
  return (
    <div>
      <Dialog
        open={tripDialogOpen}
        onClose={toggleTripDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Viagem</DialogTitle>
        <DialogContent>
          <TripForm />
        </DialogContent>
      </Dialog>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  tripDialogOpen: selectTripDialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  toggleTripDialog: () => dispatch(toggleTripDialog()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDialog)
