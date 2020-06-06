import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GroupIcon from "@material-ui/icons/Group";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Customers from "./customers/CustomersPage";
import Trainings from "./trainings/TrainingsPage";
import CalendarIcon from "@material-ui/icons/DateRangeRounded";
import Calendar from "./Calendar";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router forceRefresh={true}>
        <AppBar position="static">
          <Toolbar>
            <h1 style={{ textShadow: "3px 3px #2a3882" }}>Fake</h1>
            <h1 style={{ color: "#a6b3f7", textShadow: "3px 3px #2a3882" }}>
              Fitness
            </h1>
            <Typography variant="h6" className={classes.title}></Typography>

            <Link to="/final-task">
              <button id="mainButton">
                <HomeIcon />
              </button>
            </Link>

            <Link to="/final-task/customers">
              <button id="mainButton">
                <GroupIcon />
              </button>
            </Link>

            <Link to="/final-task/trainings">
              <button id="mainButton">
                <FitnessCenterIcon />
              </button>
            </Link>

            <Link to="/final-task/calendar">
              <button id="mainButton">
                <CalendarIcon />
              </button>
            </Link>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/final-task/customers">
            <Customers />
          </Route>
          <Route path="/final-task/trainings">
            <Trainings />
          </Route>
          <Route path="/final-task/calendar">
            <Calendar />
          </Route>
          <Route path="/final-task">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
