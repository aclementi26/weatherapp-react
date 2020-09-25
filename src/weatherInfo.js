import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="city">
      <div className="col-6">
        <ul>
          <li className="text-capitalize">
            <span id="sky"></span> {props.weather.description}
          </li>
          <li className="text-capitalize">
            <span id="humidity"></span>humidity:{props.weather.humidity}
            {""}%
          </li>
          <li className="text-capitalize">
            <span id="wind"> </span>wind:{Math.round(props.weather.wind)}
            {""}mph
          </li>
        </ul>
      </div>
    </div>
  );
}
