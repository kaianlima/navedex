import React from "react"
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import CreateIcon from "@material-ui/icons/Create"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles({
  root: {
    minWidth: 280,
    maxWidth: 280,
  },
  media: {
    height: 280,
  },
  cardTitle: {
    fontWeight: 600,
  },
})

const NaverCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          className={classes.cardTitle}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Juliano Reis
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Front-end Developer
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/">
          <DeleteIcon color="secondary" />
        </Link>
        <Link to="/">
          <CreateIcon color="secondary" />
        </Link>
      </CardActions>
    </Card>
  )
}

export default NaverCard
