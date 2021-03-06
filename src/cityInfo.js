import React from "react";
import WeatherIcon from "./weatherIcon";
import Temp from "./Temp";

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
            <WeatherIcon code={props.weather.icon} />
          </div>
        </div>
        <div className="col-3">
          <Temp
            fahrenheit={props.weather.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </div>
      </div>
    </div>
  );
}
