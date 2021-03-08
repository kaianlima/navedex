import React from "react"
import { Link } from "react-router-dom"

import IconButton from "@material-ui/core/IconButton"
import CreateIcon from "@material-ui/icons/Create"

const DeleteIconButton = ({ id, toggleNaverDeleteDialog }) => {
  return (
    <IconButton size="small" component={Link} to="/naver">
      <CreateIcon color="secondary" />
    </IconButton>
  )
}

export default DeleteIconButton
