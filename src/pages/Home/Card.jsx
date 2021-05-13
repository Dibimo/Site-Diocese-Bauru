import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 350,
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

export default function MediaCard({titulo}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`/imagens/Home/aconteceDiocese/${titulo}.jpg`}
          title={`${titulo}`}
        />
        <CardContent style={{ backgroundColor: "darkred" }}>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {`${titulo}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}