import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import DayForecast from "./DayForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast">
        <div className="row WeatherForecast text-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <DayForecast data={dailyForecast} />
                    </div>
                  );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "8e4abct0a56ee8b9ed8700oa801393f4";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
