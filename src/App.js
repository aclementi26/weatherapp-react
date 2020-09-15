import React from "react";
import "./App.css";
import robot from "./robot2.svg";
import Search from "./Search";
import CityInfo from "./cityInfo";
import "./cityInfo.css";
import WeatherInfo from "./weatherInfo";
import "./weatherInfo.css";
import Forecast from "./forecast";
import "./forecast.css";
export default function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="time">Last Update: Wednesday</div>
        <div className="glass"></div>
        <div className="content">
          <h1>Weather Bot</h1>
          <div>
            <img src={robot} alt="this is robot" class="pic" />
          </div>

          <div className="info"></div>

          <Search />

          <CityInfo />

          <WeatherInfo />
          <Forecast />
          <p class="website">
            <a
              href="https://github.com/aclementi26/weatherapp-react"
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
