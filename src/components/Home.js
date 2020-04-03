import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div style={{ maxWidth: "70%", margin: "auto", marginTop: "20px" }}>
      <h1
        style={{
          textAlign: "left",
          marginTop: "10px",
          marginBottom: "0px",
          marginRight: "15px",
          color: "#3f51b5",
          textShadow: " 2px 2px  lightgrey"
        }}
      >
        Home
      </h1>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            About the web application
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Task Case: <br />
            <p></p>
            Personal Trainer company needs front end app for their customer
            database. Database contains info about customers and their
            trainings. They have REST API and documentation that contains all
            information needed for front end development. Your task is to
            implement front end for them using either React.js or Vue.js.
            <br />
            ---------------------------------------------------------------
            <br />
            This web application contains a navigation menu leading to four
            different endpoints. One for the home page, second for the Customer
            -page, third for the Trainings -page, and fourth for the Calendar
            -page.
            <br />
            <br />
            The task turned out to be quite a challenge, but it was fun
            nonetheless. I also learned a lot from it and feel much more
            confident in React after completing it.
            <br />
            <br />
            The code is far from perfect, but it still works. (it has a few RED
            warnings, repetition in terms of code, and the css code is all over
            the place.)
            <br />
            Hope you enjoy!
            <br />
            <br />
            -Teemu Kosonen
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
