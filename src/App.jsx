import "./App.css";
import React from "react";
import Header from "./components/Header";
import Options from "./components/Options";
import VehicleInputContainer from "./components/VehicleInputContainer";
import Infograph from "./components/Infograph";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Header />
      <Options />
      <VehicleInputContainer />
      <Infograph />
    </>
  );
}

export default App;
