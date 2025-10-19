import { useEffect, useState } from "react";

export default function CurrentLocationWeather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeather(data);
      });
    }
  }, []);

  return (
    <div className="weather-card">
      {weather && weather.main ? (
        <>
          <h3>{weather.name}</h3>
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="details">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
}
