import "./App.css";
import WeatherDetail from "./WeatherDetail";

export default function App() {
  return (
    <div className="container">
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
