import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { makeStyles } from "@material-ui/core/styles"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"

import NaverCard from "../../components/naver-card/naver-card"
import NaverDetailDialog from "../naver-detail-dialog/naver-detail-dialog"
import NaverDeleteDialog from "../naver-delete-dialog/naver-delete-dialog"
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

  return (
    <Grid container spacing={5}>
      {navers.length > 0 ? (
        <>
          {navers.map(({ ...naverProps }, index) => (
            <Grid
              key={index}
              className={classes.root}
              item
              xs={matchesSm ? 6 : 3}
            >
              <NaverCard index={index} {...naverProps} />
            </Grid>
          ))}
          <NaverDetailDialog naver={naver} />
          <NaverDeleteDialog naver={naver} />
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
