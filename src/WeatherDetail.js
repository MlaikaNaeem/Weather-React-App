import "./WeatherDetail.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import { useState } from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetail(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

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
      icon: response.data.condition.icon,
      description: response.data.condition.description,
    });
  }

  function search() {
    const apiKey = "8e4abct0a56ee8b9ed8700oa801393f4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 mt-3">
            <div className="col-8 text-center">
              <input
                type="text"
                autoComplete="false"
                placeholder="Enter a city..."
                className="search-bar"
                onChange={handleCityChange}
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

        <div className="row description m-4">
          <div className="col-7 text-center mt-4">
            <h1>{weatherData.city}</h1>
            <small>
              <FormattedDate date={weatherData.date} />
            </small>
            <small>{weatherData.description}</small>
            <div>
              <div className="float-left">
                <WeatherIcon code={weatherData.icon} />
              </div>
              <div className="float-left">
                <WeatherTemperature celsius={weatherData.temperature} />
              </div>
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
    search();
    return <div>Loading....</div>;
  }
}
