import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="city">
      <div className="col-6">
        <ul>
          <li>
            <span id="sky"></span> {props.weather.description}
          </li>
          <li>
            <span id="humidity"></span>humidity:{props.weather.humidity}
            {""}%
          </li>
          <li>
            <span id="wind"> </span>wind:{Math.round(props.weather.wind)}
            {""}mph
          </li>
        </ul>
      </div>
    </div>
  );
}
