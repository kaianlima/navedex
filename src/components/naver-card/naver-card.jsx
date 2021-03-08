import React from "react"
import { connect } from "react-redux"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import DeleteIconButton from "../delete-icon-button/delete-icon-button"
import EditIconButton from "../edit-icon-button/edit-icon-button"
import {
  toggleNaverDeleteDialog,
  toggleNaverDetailDialog,
} from "../../redux/dialog/dialog.actions"

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: "17.5rem",
  },
  cardName: {
    fontWeight: 600,
    fontSize: "1rem",
  },
  iconsContainer: {
    marginLeft: "0.5rem",
  },
}))

const NaverCard = ({
  index,
  id,
  url,
  name,
  job_role,
  admission_date,
  birthdate,
  project,
  toggleNaverDeleteDialog,
  toggleNaverDetailDialog,
}) => {
  const classes = useStyles()

  const naverData = { url, name, job_role, admission_date, birthdate, project }

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          toggleNaverDetailDialog(naverData)
        }}
      >
        <CardMedia
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          className={classes.cardName}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {name}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          {job_role}
        </Typography>
      </CardContent>
      <CardActions className={classes.iconsContainer}>
        <DeleteIconButton id={id} />
        <EditIconButton />
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = (dispatch) => ({
  toggleNaverDeleteDialog: (naverId) =>
    dispatch(toggleNaverDeleteDialog(naverId)),
  toggleNaverDetailDialog: (naverData) =>
    dispatch(toggleNaverDetailDialog(naverData)),
})

export default connect(null, mapDispatchToProps)(NaverCard)
