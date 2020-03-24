import React from "react";
import Customers from "./customers";
import AppHeader from "./components/Header_bar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Customers />
    </div>
  );
}

export default App;
