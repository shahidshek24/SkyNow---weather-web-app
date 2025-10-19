import { useState } from "react";

export default function SearchCityWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="weather-card">
      <h2>Search City</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weather && weather.main && (
        <>
          <h3>{weather.name}</h3>
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="details">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </>
      )}
    </div>
  );
}
