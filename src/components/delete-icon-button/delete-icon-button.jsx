import React from "react"
import { connect } from "react-redux"

import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

import { toggleNaverDeleteDialog } from "../../redux/dialog/dialog.actions"

const DeleteIconButton = ({ id, toggleNaverDeleteDialog }) => {
  return (
    <IconButton size="small" onClick={toggleNaverDeleteDialog}>
      <DeleteIcon color="secondary" />
    </IconButton>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDeleteDialog: () => dispatch(toggleNaverDeleteDialog()),
})

export default connect(null, mapDispatchToProps)(DeleteIconButton)
