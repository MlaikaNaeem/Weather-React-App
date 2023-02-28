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
    </div>
  );
}
