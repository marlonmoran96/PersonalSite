import React from "react";
import { Grid, Paper } from "@material-ui/core";
import CardOverlay from "../subcomponents/CardOverlay";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import { React as ReactIcon, Nodejs } from "mdi-material-ui";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.common.white,
    paddingTop: "2%"
  },
  text: {
    fontSize: "calc(18px + (32 - 18) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    paddingTop: "2.5vh"
  },
  text2: {
    fontSize: "calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (10 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    paddingTop: "1.5vh",
    marginLeft: "5vw",
    marginRight: "5vw"
  },
  text3: {
    fontSize: "calc(10px + (16 - 10) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (8 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    paddingTop: "1vh",
    marginLeft: "2.5vw",
    marginRight: "2.5vw"
  },
  icon: {
    fontSize: "calc(48px + (92 - 48) * ((100vw - 300px) / (1600 - 300)))",
    marginTop: "1.5vh"
  }
});

function About(props) {
  const { classes } = props;
  return (
    <Grid container justify="center" alignItems="center" direction="row">
      
      <Grid item md={8} sm={10} xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="h2" className={classes.text} align="center">
            "Lets get it."
          </Typography>
          <Typography variant="subtitle1" align="center">
            - Me
          </Typography>
          <Typography
            variant="body1"
            className={classes.text2}
            align="center"
            color="textSecondary"
            paragraph
          >
            info
          </Typography>
        </Paper>
      </Grid>
      <Grid container justify="center">
        <Grid item md={8} sm={8} xs={12}>
          <Typography variant="h2" className={classes.text} align="center">
            Why software development?
          </Typography>
        </Grid>
        <Grid item md={8} sm={8} xs={12}>
          <Typography variant="body1" className={classes.text3} color="textPrimary" align="center">
          I've always wanted to make something that's sueful and helpful to toher people and I realized this is 
            possible in the field of Software dvelopemnt.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(About);