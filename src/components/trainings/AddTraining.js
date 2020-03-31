import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddIcon from "@material-ui/icons/Add";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import moment from "moment";

import DialogTitle from "@material-ui/core/DialogTitle";

export default function AddTraining(props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  const [training, setTraining] = React.useState({
    date: "",
    duration: "",
    activity: "",
    customer: props.customer
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = event => {
    setTraining({ ...training, [event.target.name]: event.target.value });
  };

  const dateInput = event => {
    setDate(event.target.value);
  };

  const timeInput = event => {
    setTime(event.target.value);
  };

  const addTraining = () => {
    const parsedDate = moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
    console.log("Date: " + parsedDate)
    const dateAndTime = parsedDate + " " + time;
    console.log("dateAndTime: " + dateAndTime)
    const parsed = moment
      (dateAndTime, "YYYY-MM-DD HH:mm")
      .toISOString();

    //const säätö = parsed.split("Z")[0];
    //const lol = säätö + "+0000";
    console.log("parsed: " + parsed);

    const newTraining = { ...training, date: parsed };

    props.saveTraining(newTraining);
    handleClose();
  };

  return (
    <div>
      <button
        style={{ margin: "10px" }}
        onClick={handleClickOpen}
        id="addTraining"
      >
        <AddIcon id="addIcon" />
        <FitnessCenterIcon />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new training</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="activity"
            value={training.activity}
            onChange={e => handleInputChange(e)}
            label="Activity"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="duration"
            value={training.duration}
            onChange={e => handleInputChange(e)}
            label="Duration (min)"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="date"
            onChange={e => dateInput(e)}
            label={`Date (eg. ${moment().format("DD.MM.YYYY")})`}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="time"
            onChange={e => timeInput(e)}
            label={`Time (eg. ${moment().format("HH:mm")})`}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
