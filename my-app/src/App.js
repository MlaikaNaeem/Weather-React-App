import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form id="input-box">
          <div className="box">
            <input
              type="text"
              autocomplete="off"
              placeholder="Enter a city..."
            />
          </div>
        </form>
        <br />
        <div className="card w-100">
          <div className="card-body">
            <h1 className="card-title">London</h1>
            <small> Tuesday, 8:53 </small> /<span></span>
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
              <img src="" className="weather-icon" alt="weathericon" />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Feels Like: <span className="list"></span>10°
              </li>
              <li className="list-group-item">
                Humidity: <span className="list"></span>2%
              </li>
              <li className="list-group-item">
                Wind: <span className="list"></span>1km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="daily-forecast">
          <div className="container text-center weather-forecast"></div>
        </div>
      </div>
      <div className="github-link mb-2">
        <a
          href="https://github.com/MlaikaNaeem/Weather-React-App"
          target="_blank"
          className="link"
          rel="noreferrer"
        >
          Open-source code
        </a>
        ", by Mlaika Naeem"
      </div>
    </div>
  );
}
