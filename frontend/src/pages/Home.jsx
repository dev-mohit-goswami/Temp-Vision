import { useState } from 'react'
import { FiSearch, FiMapPin, FiSun, FiCloudRain, FiCloud } from 'react-icons/fi'
import SkyBanner from '../components/SkyBanner.jsx'
import WeatherCard from '../components/WeatherCard.jsx'
import ForecastCard from '../components/ForecastCard.jsx'
import AirQualityCard from '../components/AirQualityCard.jsx'
import AnalyticsChart from '../components/AnalyticsChart.jsx'
import { useWeather } from '../hooks/useWeather.js'

const forecastIcons = [FiSun, FiCloud, FiCloudRain, FiSun, FiCloud, FiSun, FiCloudRain]
const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function Home() {
  const { city, setCity, current, airQuality, loading, error } = useWeather('Jaipur')
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchValue.trim()) setCity(searchValue.trim())
  }

  const aqi = airQuality?.list?.[0]?.main?.aqi
  const components = airQuality?.list?.[0]?.components

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 h-[420px]">
          <SkyBanner />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-eyebrow text-white/80">Live environmental intelligence</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
              Know the sky before you step outside.
            </h1>
            <p className="mt-4 text-lg text-white/85">
              TempVision blends live weather, air quality, and forecast trends into one
              dashboard — built for people who plan their day around the atmosphere.
            </p>

            <form onSubmit={handleSearch} className="mt-8 flex max-w-md gap-2">
              <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/95 px-4 py-3 shadow-glass backdrop-blur-glass">
                <FiSearch className="h-4 w-4 text-slate-400" />
                <input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search a city..."
                  className="w-full bg-transparent text-sm text-dark outline-none placeholder:text-slate-400"
                />
              </div>
              <button type="submit" className="btn-primary">Search</button>
            </form>
            <button
              type="button"
              onClick={() => setCity('Jaipur')}
              className="mt-3 inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
            >
              <FiMapPin className="h-3.5 w-3.5" /> Use current location
            </button>
          </div>

          {current && (
            <div className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-glass">
              <span className="font-data text-5xl font-medium text-white">
                {Math.round(current.main.temp)}°
              </span>
              <div className="text-white/85">
                <p className="font-medium capitalize">{current.weather?.[0]?.description}</p>
                <p className="text-sm">{current.name}, {current.sys?.country}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {error && (
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-warning">
            {error}
          </div>
        </div>
      )}

      {/* Live weather cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Right now in {city}</p>
        <h2 className="mt-2 text-2xl font-semibold">Current conditions</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <WeatherCard type="temperature" label="Temperature" value={current ? Math.round(current.main.temp) : '—'} unit="°C" accent="primary" />
          <WeatherCard type="humidity" label="Humidity" value={current ? current.main.humidity : '—'} unit="%" accent="secondary" />
          <WeatherCard type="wind" label="Wind Speed" value={current ? current.wind.speed : '—'} unit="m/s" accent="accent" />
          <WeatherCard type="pressure" label="Pressure" value={current ? current.main.pressure : '—'} unit="hPa" accent="primary" />
          <WeatherCard type="visibility" label="Visibility" value={current ? (current.visibility / 1000).toFixed(1) : '—'} unit="km" accent="secondary" />
          <WeatherCard type="uv" label="UV Index" value={loading ? '…' : '5'} unit="" accent="warning" />
        </div>
      </section>

      {/* 7-day forecast */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Looking ahead</p>
        <h2 className="mt-2 text-2xl font-semibold">7-day forecast</h2>
        <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {dayLabels.map((day, i) => (
            <ForecastCard
              key={day}
              day={day}
              icon={forecastIcons[i]}
              high={26 - i}
              low={16 - i}
              description={i % 2 === 0 ? 'Sunny' : 'Cloudy'}
            />
          ))}
        </div>
      </section>

      {/* Air quality + chart */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Breathe easy</p>
            <h2 className="mt-2 mb-6 text-2xl font-semibold">Air quality</h2>
            <AirQualityCard
              aqi={aqi || 2}
              pm25={components?.pm2_5?.toFixed(1)}
              pm10={components?.pm10?.toFixed(1)}
              co={components?.co?.toFixed(0)}
              no2={components?.no2?.toFixed(1)}
            />
          </div>
          <div>
            <p className="section-eyebrow">Trends</p>
            <h2 className="mt-2 mb-6 text-2xl font-semibold">Temperature over the week</h2>
            <AnalyticsChart
              title="Temperature"
              labels={dayLabels}
              data={[26, 25, 27, 24, 23, 22, 25]}
              color="#2563EB"
              unit="°C"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
