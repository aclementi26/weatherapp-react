import React from "react";
import WeatherIcon from "./weatherIcon";

export default function CityInfo(props) {
  return (
    <div className="containor">
      <div className="row">
        <div className="col-3">
          <strong>{props.weather.city}</strong>
        </div>
        <div className="col-2">
          {" "}
          <div className="symbol">
            <WeatherIcon />
          </div>
        </div>
        <div className="col-3">
          <span className="temp">{Math.round(props.weather.temperature)}</span>
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
