import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a >
          WeatherApp
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.gauravghai.dev/">
          Akshat Chaudhary
        </a>{" "}
        | {" "}
        <a target="_blank" href="https://www.linkedin.com/in/akshat-chaudhary-03366b236/">
          Linkdln
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
