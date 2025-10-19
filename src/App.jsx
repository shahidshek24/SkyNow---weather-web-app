import "./App.css";
import CurrentLocationWeather from "./components/CurrentLocationWeather";
import SearchCityWeather from "./components/SearchCityWeather";

export default function App() {
  return (
    <div className="App">
      <div className="weather-container">
        
        <SearchCityWeather />
        <CurrentLocationWeather />
      </div>
    </div>
  );
}
