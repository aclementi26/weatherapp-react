import React, { useState } from "react";
export default function Temp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
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
          <a href="/" onClick={convertFahrenheit} className="active">
            °F
          </a>
          {""}|<a href="/">°C</a>
        </span>
      </div>
    );
  }
}
