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
  const [time, setTime] = React.useState("");
  const [date, setDate] = React.useState("");
  console.log(moment("21-07-1995", "DD-MM-YYYY").toISOString());

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
    props.saveTraining(training);
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
            label={`Date (eg. ${moment().format("DD-MM-YYYY")})`}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="time"
            onChange={e => timeInput(e)}
            label={`Time (eg. ${moment().format("hh:mm")})`}
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
