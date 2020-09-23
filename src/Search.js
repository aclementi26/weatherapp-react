import React, { useState } from "react";
import CityInfo from "./cityInfo";
import "./cityInfo.css";
import WeatherInfo from "./weatherInfo";
import "./weatherInfo.css";
import Forecast from "./forecast";
import "./forecast.css";
import DateInfo from "./dateInfo";
import axios from "axios";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  let [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeather({
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }
  function search() {
    const apiKey = "a9104f2314b512cecea71c4724f538fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function showLocation(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const apiKey = "a9104f2314b512cecea71c4724f538fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showLocation);
  }
  if (ready) {
    return (
      <>
        <DateInfo date={weather.date} />
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-3">
              <input
                type="search"
                className="form-control"
                id="exampleInputEmail1"
                placeholder=" Enter a City"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-info"
              />
            </div>
            <div className="col-">
              <button
                className="btn btn-outline-info"
                onClick={getCurrentLocation}
              >
                Current
              </button>
            </div>
          </div>
        </form>

        <CityInfo weather={weather} defaultCity="Philadelphia" />

        <WeatherInfo weather={weather} />
        <Forecast />
      </>
    );
  } else {
    search();
    return null;
  }
}
