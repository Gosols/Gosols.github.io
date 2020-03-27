import React from "react";
import Customers from "./components/customers/CustomersPage";
import Trainings from "./components/trainings/TrainingsPage";
import AppHeader from "./components/Header_bar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Customers />
      <Trainings />
    </div>
  );
}

export default App;
