import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function max() {
    let maximum = Math.round(props.data.temperature.maximum);
    return `${maximum}`;
  }
  function min() {
    let minimum = Math.round(props.data.temperature.minimum);
    return `${minimum}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="forecast-data">
      <div className="forecast-day">
        <h5>{day()}</h5>
      </div>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={40} />
      </div>
      <div className="forecast-temp">
        <span className="max-temp">{max()}°</span>
        <span className="min-temp">{min()}°</span>
      </div>
    </div>
  );
}
