import React from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditCustomer from "./EditCustomer";
import AddCustomer from "./AddCustomer";

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
      width: 100,
      accessor: "links[0].href",
      Cell: row => (
        <div>
          <div style={{ float: "left" }}>
            <EditCustomer
              updateCustomer={updateCustomer}
              customer={row.original}
            />
          </div>
          <div style={{ float: "left" }}>
            <IconButton
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
    <div>
      <AddCustomer saveCustomer={saveCustomer} />
      <ReactTable data={customers} columns={columns} />
    </div>
  );
}
