import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditTraining from "./EditTraining";

export default function Trainings() {
  const [trainings, setTrainings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(data => setTrainings(data));
  }, []);

  const fetchdata = () => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(data => setTrainings(data));
  };

  const updateTraining = (training, link) => {
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(training)
    })
      .then(res => fetchdata())
      .catch(err => console.error(err));
  };

  const deleteTraining = link => {
    if (window.confirm(`Are you sure you want to delete this training?`)) {
      fetch(link, { method: "DELETE" })
        .then(res => fetchdata())
        .catch(err => console.error(err));
    }
  };

  const columns = [
    {
      sortable: false,
      filterable: false,
      width: 75,
      //accessor: "",
      Cell: row => (
        <div>
          <div style={{ float: "left" }}>
            {console.log(row.original)}
            <EditTraining
              updateTraining={updateTraining}
              training={row.original}
            />
          </div>
          <div style={{ float: "left" }}>
            <IconButton
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => {
                deleteTraining(`https://customerrest.herokuapp.com/api/trainings/${row.original.id}`);
                console.log(row.original.id)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )
    },
    {
      Header: "Activity",
      accessor: "activity"
    },
    {
      Header: "Duration (min)",
      accessor: "duration"
    },
    {
      Header: "Date",
      accessor: "date"
    },
    {
      Header: "Customer",
      accessor: "customer",
      Cell: row => (
        <div>
          {row.original.customer.firstname} {row.original.customer.lastname}
        </div>
      )
    }
  ];

  return (
    <div>
      <ReactTable data={trainings} columns={columns} filterable={true} />
    </div>
  );
}
