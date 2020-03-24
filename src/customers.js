import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function Customers() {
  const classes = useStyles();
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(json => {
        setCustomers(json.content);
      });
  }, []);

  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Post code</StyledTableCell>
              <StyledTableCell align="right">City</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((cust, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {cust.firstname + " " + cust.lastname}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {cust.streetaddress}
                </StyledTableCell>
                <StyledTableCell align="right">{cust.postcode}</StyledTableCell>
                <StyledTableCell align="right">{cust.city}</StyledTableCell>
                <StyledTableCell align="right">{cust.email}</StyledTableCell>
                <StyledTableCell align="right">{cust.phone}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>{" "}
    </div>
  );
}
