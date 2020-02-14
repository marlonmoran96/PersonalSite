import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardMedia,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    height: "30vh"
  },
  paperContent: {
    padding: `${theme.spacing.unit * 6}px`,
  },
  card: {
    position: "relative",
    height: "100%"
  },
  cardMedia: {
    height: "100%",
    width: "100%",
    filter: "grayscale(90%) blur(2px) brightness(60%)",
    contrast: "40%",
  },
  overlay: {
    position: "absolute",
    top: "12.5vh",
    height: "15em",
    left: "25%",
    right: "25%",
    fontSize: "calc(22px + (40 - 22) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.white,
    display: "inline"
  }
});

function CardOverlay(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <CardMedia image={props.image} className={classes.cardMedia} />
            <Typography className={classes.overlay} variant="h3" align="center">
              {props.text}
            </Typography>
      </Card>
    </Paper>
  );
}

export default withStyles(styles)(CardOverlay);