import React from "react";
import {
  Grid,
  CardContent,
  Card,
  Typography,
  withStyles,
  Tooltip
} from "@material-ui/core";

const styles = theme => ({
  card: {
    marginTop: "5vh",
    marginRight: "2vh",
    marginLeft: "2vh"
  },
  text: {
    fontSize: "calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)))",
    lineHeight: "calc(1.2em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)))",
    color: theme.palette.common.black,
    paddingTop: "2.5vh"
  }
});

function ContactInfo(props) {
  const { classes } = props;
  return (
    <Grid item md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Tooltip title={props.content}>
            <Typography align="center">{props.icon}</Typography>
          </Tooltip>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(styles)(ContactInfo);