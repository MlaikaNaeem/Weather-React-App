import "./WeatherDetail.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import { useState } from "react";

export default function WeatherDetail() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      feelslike: response.data.temperature.feels_like,
      wind: response.data.wind.speed,
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form>
          <div className="row mb-3 mt-3">
            <div className="col-8 text-center">
              <input
                type="text"
                autoComplete="false"
                placeholder="Enter a city..."
                className="search-bar"
              />
            </div>
            <div className="col-4 text-center">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-dark btn-lg"
              />
            </div>
          </div>
        </form>
        <div className="row description">
          <div className="col-7 text-center mt-4">
            <h1>{weatherData.city}</h1>
            <small><FormattedDate date={weatherData.date}/></small> /
            <small>{weatherData.description}</small>
            <br />
            <div>
              <span className="main-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/">°C</a>
                <span> |</span>
                <a href="/">°F</a>
              </span>
              <br />
              <img
                src={weatherData.iconUrl}
                className="weather-icon"
                alt="weathericon"
              />
            </div>
          </div>
          <div className="col-5 text-center mt-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Feels Like: <span className="list"></span>
                {Math.round(weatherData.feelslike)}°
              </li>
              <li className="list-group-item">
                Humidity: <span className="list"></span>
                {weatherData.humidity}%
              </li>
              <li className="list-group-item">
                Wind: <span className="list"></span>
                {Math.round(weatherData.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8e4abct0a56ee8b9ed8700oa801393f4";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
    return <div>Loading....</div>;
  }
}
