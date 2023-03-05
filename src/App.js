import "./App.css";
import WeatherDetail from "./WeatherDetail";

export default function App() {
  return (
    <div className="container">
      <WeatherDetail city="London"/>
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
