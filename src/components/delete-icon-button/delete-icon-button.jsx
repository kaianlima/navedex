import React from "react"
import { connect } from "react-redux"

import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

import { toggleNaverDeleteDialog } from "../../redux/dialog/dialog.actions"

const DeleteIconButton = ({ id, toggleNaverDeleteDialog }) => {
  return (
    <IconButton
      size="small"
      onClick={() => {
        toggleNaverDeleteDialog(id)
      }}
    >
      <DeleteIcon color="secondary" />
    </IconButton>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDeleteDialog: (naverId) =>
    dispatch(toggleNaverDeleteDialog(naverId)),
})

export default connect(null, mapDispatchToProps)(DeleteIconButton)
