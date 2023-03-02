import "./WeatherDetail.css";

export default function WeatherDetail() {
  return (
    <div className="row description">
      <div className="col-7 text-center mt-4">
        <h1>London</h1>
        <small> Tuesday, 8:53 </small> / <small>Overcast Clouds</small>
        <br />
        <div>
          <span>17</span>
          <span>
            <a href="/" className="active">
              °C
            </a>
            <span> |</span>
            <a href="/" className="fahrenheit">
              °F
            </a>
          </span>
          <img src="/" className="weather-icon" alt="weathericon" />
        </div>
      </div>
      <div className="col-5 text-center mt-4">
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
