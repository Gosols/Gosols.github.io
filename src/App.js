import React from "react";
import AppHeader from "./components/Header_bar";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Calendar />
    </div>
  );
}

export default App;
