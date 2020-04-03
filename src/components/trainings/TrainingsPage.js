import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditTraining from "./EditTraining";
import moment from "moment";

export default function Trainings() {
  const [trainings, setTrainings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(err => console.error(err));
  }, []);

  const fetchdata = () => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(err => console.error(err));
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
        <div style={{display:"flex"}}>
          <div >
            <EditTraining
            
              updateTraining={updateTraining}
              training={row.original}
            />
          </div>
          <div >
            <IconButton
            id="mainButtonDelete"

              onClick={() => {
                deleteTraining(
                  `https://customerrest.herokuapp.com/api/trainings/${row.original.id}`
                );
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
      accessor: "date",
      Cell: row => (
        <div>
          {moment(row.original.date).format("DD.MM.YYYY")}{" "}
          <i>{moment(row.original.date).format("(HH:mm)")}</i>
        </div>
      )
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
    <div style={{ textAlign: "center"}}>
      <div style={{maxWidth:"70%", margin: "auto"}}>
        <h1 style={{textAlign:"left", marginTop:"10px",
                marginBottom: "10px", color:"#3f51b5", textShadow:" 2px 2px  lightgrey"}}>Trainings</h1>
        <ReactTable data={trainings} columns={columns} filterable={true} />
      </div>
    </div>
  );
}
