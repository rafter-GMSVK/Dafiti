import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Cards(item) {
  const classes = useStyles();

  console.log(item);
  return (
    <Card className={classes.root}>
      <CardActionArea style={{ height: 400 }}>
        <CardMedia
          style={{ height: 250 }}
          className={classes.media}
          image={item.item?.image?.thumbnail?.contentUrl}
          title={item.item?.description}
        />
        <CardContent style={{ paddingTop: 20 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.item?.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            padding
          >
            {item.item?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ paddingTop: 50, marginTop: 20 }}>
        <Button size="small" color="primary" href={item.item?.url}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
