import React, { useState } from "react";
import axios from "axios";
export default function WeatherInfo() {
  let [weather, setWeather] = useState({});
  function handleResponse(response) {
    setWeather({
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
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
          <li className="text-capitalized">
            <span id="sky"></span>
            {weather.description}
          </li>
          <li className="text-capitalized">
            <span id="humidity"></span>humidity:{weather.humidity}
            {""}%
          </li>
          <li className="text-capitalized">
            <span id="wind"> </span>wind: 2 mph
          </li>
        </ul>
      </div>
    </div>
  );
}
