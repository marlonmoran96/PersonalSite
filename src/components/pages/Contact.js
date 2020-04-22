import React from "react";
import { Grid, IconButton, Snackbar } from "@material-ui/core";
import sunnyview from "../../static/sunnyview.jpg";
import CardOverlay from "../subcomponents/CardOverlay";
import withStyles from "@material-ui/core/styles/withStyles";
import ContactInfo from "../subcomponents/ContactInfo";
import { Email, Phone, Github, Linkedin } from "mdi-material-ui";
import { CopyToClipboard } from "react-copy-to-clipboard";


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
  icon: {
    fontSize: "calc(48px + (92 - 48) * ((100vw - 300px) / (1600 - 300)))"
  }
});

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" alignItems="center" direction="row">
        <Grid item md={8} sm={10} xs={12}>
          <CardOverlay image={sunnyview} text="Contact" />
        </Grid>
        <Grid item md={8} sm={10} xs={12}>
          <Grid container justify="center" alignItems="center" direction="row">
            <ContactInfo
              content={"email"}
              icon={
                <CopyToClipboard text="email">
                  <IconButton onClick={this.handleClick}>
                    <Email className={classes.icon} />
                  </IconButton>
                </CopyToClipboard>
              }
            />
            <ContactInfo
              content={"606-383-0698"}
              icon={
                <CopyToClipboard text="606-383-0698">
                  <IconButton onClick={this.handleClick}>
                    <Phone className={classes.icon} />
                  </IconButton>
                </CopyToClipboard>
              }
            />
            <ContactInfo
              content={"https://www.linkedin.com/in/marlon-moran-926b40180/"}
              icon={
                <IconButton
                  href="https://www.linkedin.com/in/marlon-moran-926b40180/"
                  target="_blank"
                  rel="noopener"
                >
                  <Linkedin className={classes.icon} />
                </IconButton>
              }
            />
            <ContactInfo
              content={"https://github.com/marlonmoran96/"}
              icon={
                <IconButton
                  href="https://www.github.com/marlonmoran96/"
                  target="_blank"
                  rel="noopener"
                >
                  <Github className={classes.icon} />
                </IconButton>
              }
            />
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
          open={this.state.open}
          onClose={this.handleClose}
          autoHideDuration={2000}
          message={<span> Copied to clipboard </span>}
        />
      </Grid>
    );
  }
}

export default withStyles(styles)(Contact);