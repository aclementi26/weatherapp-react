import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./weatherIcon";

export default function CityInfo() {
  const [ready, setReady] = useState(false);
  const [temp, setTemp] = useState(0);
  function handleCity(response) {
    setTemp(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
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
  } else {
    const apiKey = "a9104f2314b512cecea71c4724f538fc";
    let city = "Philadelphia";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleCity);
    return "loading";
  }
}
