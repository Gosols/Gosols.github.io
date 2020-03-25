import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HomeIcon from '@material-ui/icons/Home';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));



export default function AppHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <h1 style={{ textShadow: "3px 3px #2a3882" }}>Fake</h1>
          <h1 style={{ color: "#a6b3f7", textShadow: "3px 3px #2a3882" }}>
            Fitness
          </h1>
          <Typography variant="h6" className={classes.title}></Typography>
          <button id="mainButton">
            <HomeIcon />
          </button>
          <button id="mainButton">
            <GroupIcon />
          </button>
          <button id="mainButton">
            <FitnessCenterIcon />
          </button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
