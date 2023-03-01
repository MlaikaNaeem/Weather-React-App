import "./WeatherDetail.css";

export default function WeatherDetail() {
  return (
    <div className="row description">
      <div className="col-6 text-center">
        <h1 className="card-title">London</h1>
        <small> Tuesday, 8:53 </small> / <small>Overcast Clouds</small>
        <br />
        <div>
          <span className="main-temp">17</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>
            <span className="convert"> |</span>
            <a href="/" className="fahrenheit">
              °F
            </a>
          </span>
          <img src="/" className="weather-icon" alt="weathericon" />
        </div>
      </div>
      <div className="col-6 text-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Feels Like: <span className="list"></span>°
          </li>
          <li className="list-group-item">
            Humidity: <span className="list"></span>%
          </li>
          <li className="list-group-item">
            Wind: <span className="list"></span>km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
