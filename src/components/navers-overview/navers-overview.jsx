import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"

import NaverCard from "../../components/naver-card/naver-card"
import NaverDetailDialog from "../naver-detail-dialog/naver-detail-dialog"
import NaverDeleteDialog from "../naver-delete-dialog/naver-delete-dialog"
import NaverFeedbackDialog from "../naver-feedback-dialog/naver-feedback-dialog"
import {
  selectNaversForOverview,
  selectCurrentNaver,
} from "../../redux/naver/naver.selectors"

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const NaversOverview = ({ navers, naver }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))

  return (
    <Grid container spacing={5}>
      {navers.length > 0 ? (
        <>
          {navers.map(({ ...naverProps }, index) => (
            <Grid
              key={index}
              className={classes.root}
              item
              xs={matchesSm ? (matchesXs ? 12 : 6) : 3}
            >
              <NaverCard {...naverProps} />
            </Grid>
          ))}

          <NaverDetailDialog naver={naver} />
          <NaverDeleteDialog naverId={naver.id} />
          <NaverFeedbackDialog />
        </>
      ) : null}
    </Grid>
  )
}

const mapStateToProps = createStructuredSelector({
  navers: selectNaversForOverview,
  naver: selectCurrentNaver,
})

export default connect(mapStateToProps)(NaversOverview)
