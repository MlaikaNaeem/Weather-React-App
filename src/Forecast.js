import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row WeatherForecast">
        <div className="col">
          <div className="forecast-day">Friday</div>
          <div className="forecast-icon">
            <WeatherIcon code="rain-night" size={40} />
          </div>
          <div className="forecast-temp">
            <span className="max-temp">30°</span>
            <span className="min-temp">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
