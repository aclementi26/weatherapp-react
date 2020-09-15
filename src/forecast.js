import React from "react";
import WeatherIcon from "./weatherIcon";
export default function forecast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">Monday</div>
        <div className="col-2">
          {" "}
          <div className="icon">
            <WeatherIcon />
          </div>
        </div>
        <div className="col-2">75</div>
      </div>
      <div className="row">
        <div className="col-2">Tuesday</div>
        <div className="col-2">
          {" "}
          <div className="icon">
            <WeatherIcon />
          </div>
        </div>
        <div class="col-2">65</div>
      </div>
      <div className="row">
        <div className="col-2">Wednesday</div>
        <div class="col-2">
          {" "}
          <div className="icon">
            <WeatherIcon />
          </div>
        </div>
        <div className="col-2">75</div>
      </div>
      <div className="row">
        <div className="col-2">Thursday</div>
        <div className="col-2">
          {" "}
          <div className="icon">
            <WeatherIcon />
          </div>
        </div>
        <div className="col-2">85</div>
      </div>
      <div className="row">
        <div className="col-2">Friday</div>
        <div className="col-2">
          {" "}
          <div className="icon">
            <WeatherIcon />
          </div>
        </div>
        <div className="col-2">67</div>
      </div>
    </div>
  );
}
