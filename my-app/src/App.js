import "./App.css";


export default function App() {
  return (
    <div className="weather-app">
      <header className="App-header">
        <div className="search-bar">
          <form>
            <input
              type="text"
              autocomplete="off"
              placeholder="Enter a city..."
            />
          </form>
        </div>
      </header>
    </div>
  );
}


