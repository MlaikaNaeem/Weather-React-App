import "./App.css";
import WeatherDetail from "./WeatherDetail";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form>
          <input
            type="text"
            autoComplete="false"
            placeholder="Enter a city..."
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-btn" />
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
