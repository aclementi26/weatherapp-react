import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./forecastPreview";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div>
        <ForecastPreview data={forecast.list[0]} unit={props.unit} />
        <ForecastPreview data={forecast.list[1]} unit={props.unit} />
        <ForecastPreview data={forecast.list[2]} unit={props.unit} />
        <ForecastPreview data={forecast.list[3]} unit={props.unit} />
        <ForecastPreview data={forecast.list[4]} unit={props.unit} />
      </div>
    );
  } else {
    let apiKey = "a9104f2314b512cecea71c4724f538fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleForecast);
    return null;
  }
}
