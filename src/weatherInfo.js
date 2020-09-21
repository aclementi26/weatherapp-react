import React, { useState } from "react";
import axios from "axios";
export default function WeatherInfo() {
  let [weather, setWeather] = useState({});
  function handleResponse(response) {
    setWeather({
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  const apiKey = "528d4f65c0d969adf7b1c6c8cc89d6d4";
  let city = "Philadelphia";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div class="city">
      <div className="col-6">
        <ul>
          <li>
            <span id="sky"></span> {weather.description}
          </li>
          <li>
            <span id="humidity"></span>humidity:{weather.humidity}
            {""}%
          </li>
          <li>
            <span id="wind"> </span>wind:{Math.round(weather.wind)}
            {""}mph
          </li>
        </ul>
      </div>
    </div>
  );
}
