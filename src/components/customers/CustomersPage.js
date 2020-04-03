import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditCustomer from "./EditCustomer";
import AddCustomer from "./AddCustomer";
import AddTraining from "../trainings/AddTraining";

export default function Customers() {
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data.content));
  }, []);

  const fetchdata = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data.content));
  };

  const saveCustomer = customer => {
    fetch("https://customerrest.herokuapp.com/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(res => fetchdata())
      .catch(err => console.error(err));
    //setSaveopen(true);
  };

  const saveTraining = training => {
    fetch("https://customerrest.herokuapp.com/api/trainings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(training)
    })
      .then(res => fetchdata())
      .catch(err => console.error(err));
    //setSaveopen(true);
  };

  const updateCustomer = (customer, link) => {
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(res => fetchdata())
      .catch(err => console.error(err));
    //setEditopen(true);
  };

  const deleteCustomer = link => {
    if (window.confirm(`Are you sure you want to delete this customer?`)) {
      fetch(link, { method: "DELETE" })
        .then(res => fetchdata())
        .catch(err => console.error(err));
      //setOpen(true);
    }
  };

  const columns = [
    {
      sortable: false,
      filterable: false,
      width: 75,
      accessor: "links[0].href",
      Cell: row => (
        <div style={{ display: "flex"}}>
          <div >
            <EditCustomer
              updateCustomer={updateCustomer}
              customer={row.original}
            />
          </div>
          <div >
            <IconButton
              id="mainButtonDelete"
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => deleteCustomer(row.value)}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )
    },
    {
      filterable: false,
      sortable: false,
      Cell: row => (
        <div>
          <AddTraining 
            saveTraining={saveTraining}
            customer={row.original.links[0].href}
          />
        </div>
      )
    },
    {
      Header: "Firstname",
      accessor: "firstname"
    },
    {
      Header: "Lastname",
      accessor: "lastname"
    },
    {
      Header: "Address",
      accessor: "streetaddress"
    },
    {
      Header: "Postal Code",
      accessor: "postcode"
    },
    {
      Header: "City",
      accessor: "city"
    },
    {
      Header: "E-mail",
      accessor: "email"
    },
    {
      Header: "Phone",
      accessor: "phone"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "70%", margin: "auto" }}>
        <div style={{ textAlign: "left", display:"flex"}}>
          <h1
            style={{
              marginTop: "10px",
              marginBottom: "0px",
              marginRight: "15px",
              color: "#3f51b5",
              textShadow: " 2px 2px  lightgrey"
            }}
          >
            Customers
          </h1>
          <AddCustomer saveCustomer={saveCustomer} />
        </div>

        <ReactTable data={customers} columns={columns} filterable={true} />
      </div>
    </div>
  );
}
