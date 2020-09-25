import React from "react";
import "./App.css";
import robot from "./robot2.svg";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="glass"></div>
        <div className="content">
          <h1>Weather Bot</h1>
          <div>
            <img src={robot} alt="this is robot" className="pic" />
          </div>

          <div className="info"></div>

          <Search defaultCity="Philadelphia" />

          <p className="website">
            <a
              href="https://github.com/aclementi26/weatherapp-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            by Alison Clementi
          </p>
        </div>
      </div>
    </div>
  );
}
