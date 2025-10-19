import './App.css'
import CurrentLocationWeather from './components/CurrentLocationWeather'
import SearchCityWeather from './components/SearchCityWeather'

export default function App() {
  return (
    <div className="App">
      {/* 🪙 Header with Logo and Title */}
      <header className="app-header">
        <img src="/logo1.png" alt="App Logo" className="app-logo" />
      </header>

      {/* 🌤 Weather Cards Container */}
      <div className="weather-container">
        <CurrentLocationWeather />
        <SearchCityWeather />
      </div>
    </div>
  )
}
