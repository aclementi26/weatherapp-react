import React from "react";
export default function Temp(props) {
  function convertCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function convertFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  if (props.unit === "fahrenheit") {
    return (
      <div>
        <span className="temp">{Math.round(props.fahrenheit)}</span>
        <span className="units">
          <a href="/" className="active">
            °F
          </a>
          {""}|
          <a href="/" onClick={convertCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = (5 / 9) * (props.fahrenheit - 32);
    return (
      <div>
        <span className="temp">{Math.round(celsius)}</span>
        <span className="units">
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
          {""}|
          <a href="/" className="cel">
            °C
          </a>
        </span>
      </div>
    );
  }
}
