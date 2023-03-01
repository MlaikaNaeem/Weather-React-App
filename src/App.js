import "./App.css";
import WeatherDetail from "./WeatherDetail";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form>
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                autoComplete="false"
                placeholder="Enter a city..."
                className="search-bar"
              />
            </div>
            <div className="col-5">
              <input type="submit" value="Search" className="search-btn" />
            </div>
          </div>
        </form>

        <WeatherDetail />
      </div>
      <div className="github-link mb-2">
        <a
          href="https://github.com/MlaikaNaeem/Weather-React-App"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Open-source code
        </a>
        ", by Mlaika Naeem"
      </div>
    </div>
  );
}
