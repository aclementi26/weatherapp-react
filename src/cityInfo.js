import React from "react";
import WeatherIcon from "./weatherIcon";
export default function cityInfo() {
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
          <span className="temp">85</span>
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
