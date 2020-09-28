import React from "react";
import WeatherIcon from "./weatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">{hours()}</div>
        <div className="col-2">
          {" "}
          <div className="icon">
            <WeatherIcon code={props.data.weather[0].icon} />
          </div>
        </div>
        <div className="col-2">{Math.round(props.data.main.temp)}º</div>
      </div>
    </div>
  );
}
