import React from "react"
import { connect } from "react-redux"

import { Link } from "react-router-dom"

import IconButton from "@material-ui/core/IconButton"
import CreateIcon from "@material-ui/icons/Create"

import { fetchNaverDetailStart } from "../../redux/naver/naver.actions"

const EditIconButton = ({ naverId, fetchNaverDetailStart }) => {
  return (
    <IconButton
      size="small"
      component={Link}
      to={{ pathname: `/naver/${naverId ? naverId : ""}` }}
      onClick={() => {
        fetchNaverDetailStart(naverId)
      }}
    >
      <CreateIcon color="secondary" />
    </IconButton>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchNaverDetailStart: (naverId) => dispatch(fetchNaverDetailStart(naverId)),
})

export default connect(null, mapDispatchToProps)(EditIconButton)
