import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Button from "@material-ui/core/Button/Button";
import logo from "../static/MM.png";
import { GithubBox, LinkedinBox } from "mdi-material-ui";
import Main from "./Main";
import { Link } from "react-router-dom";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    justifyContent: "flex-end"
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  logo: {
    height: 65,
    width: 65
  },
  navLinks: {}
});

class Nav extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Toolbar className={classes.toolbarMain}>
            <div className={classes.toolbarTitle}>
              <IconButton component={Link} to="/">
                <img src={logo} alt="MMLogo" className={classes.logo} />
              </IconButton>
            </div>
            <IconButton
              href="https://github.com"
              target="_blank"
              rel="noopener"
            >
              <GithubBox fontSize="large" />
            </IconButton>
            <IconButton
              href="https://www.google.com"
              target="_blank"
              rel="noopener"
            >
              <LinkedinBox fontSize="large" />
            </IconButton>
          </Toolbar>
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            <Button color="inherit" component={Link} to="/about">
              <Typography color="inherit" variant="body1" noWrap>
                About
              </Typography>
            </Button>
        
          </Toolbar>
        </div>
        <Main  />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Nav);