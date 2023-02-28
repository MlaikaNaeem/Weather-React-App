import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <form>
          <input
            type="text"
            autocomplete="off"
            placeholder="Enter a city..."
            className="search-bar"
          />
          <input type="submit" value="Search" className="search-btn" />
        </form>
      </div>
    </div>
  );
}
