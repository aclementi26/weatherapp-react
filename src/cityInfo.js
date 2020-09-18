import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./weatherIcon";

export default function CityInfo() {
  const [temp, setTemp] = useState(null);
  function handleCity(response) {
    setTemp(response.data.main.temp);
  }

  const apiKey = "528d4f65c0d969adf7b1c6c8cc89d6d4";
  let city = "Philadelphia";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleCity);
  return (
    <div className="containor">
      <div className="row">
        <div className="col-3">
          <strong>Philadelphia</strong>
        </div>
        <div className="col-2">
          {" "}
          <div className="symbol">
            <WeatherIcon />
          </div>
        </div>
        <div className="col-3">
          <span className="temp">{Math.round(temp)}</span>
          <span className="units">
            <a href="/" className="active">
              °F
            </a>
            {""}|<a href="/"> °C</a>
          </span>
        </div>
      </div>
    </div>
  );
}
