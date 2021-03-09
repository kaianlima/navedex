import React from "react"
import { connect } from "react-redux"

import { Link } from "react-router-dom"

import IconButton from "@material-ui/core/IconButton"
import CreateIcon from "@material-ui/icons/Create"

import { setCurrentNaver } from "../../redux/naver/naver.actions"

const EditIconButton = ({ naver, setCurrentNaver }) => {
  return (
    <IconButton
      size="small"
      component={Link}
      to={{ pathname: `/naver/${naver ? naver.id : ""}` }}
      onClick={() => {
        setCurrentNaver(naver)
      }}
    >
      <CreateIcon color="secondary" />
    </IconButton>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentNaver: (naverData) => dispatch(setCurrentNaver(naverData)),
})

export default connect(null, mapDispatchToProps)(EditIconButton)
