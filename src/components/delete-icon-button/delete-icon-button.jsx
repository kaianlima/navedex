import React from "react"
import { connect } from "react-redux"

import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

import { toggleNaverDeleteDialog } from "../../redux/dialog/dialog.actions"

const DeleteIconButton = ({ naver, toggleNaverDeleteDialog }) => {
  return (
    <IconButton
      size="small"
      onClick={() => {
        if (naver) {
          toggleNaverDeleteDialog(naver)
        }
      }}
    >
      <DeleteIcon color="secondary" />
    </IconButton>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDeleteDialog: (naver) => dispatch(toggleNaverDeleteDialog(naver)),
})

export default connect(null, mapDispatchToProps)(DeleteIconButton)
