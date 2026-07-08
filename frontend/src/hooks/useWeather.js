import { useEffect, useState, useCallback } from 'react'
import { getCurrentWeather, getForecast, getAirQuality } from '../services/weatherApi'

export function useWeather(initialCity = 'Jaipur') {
  const [city, setCity] = useState(initialCity)
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [airQuality, setAirQuality] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchAll = useCallback(async (targetCity) => {
    setLoading(true)
    setError(null)
    try {
      const weather = await getCurrentWeather(targetCity)
      setCurrent(weather)
      const [forecastData, aqData] = await Promise.all([
        getForecast(targetCity),
        getAirQuality(weather.coord.lat, weather.coord.lon),
      ])
      setForecast(forecastData)
      setAirQuality(aqData)
    } catch (err) {
      setError(
        err?.response?.status === 401
          ? 'Add a valid VITE_WEATHER_API_KEY in your .env file.'
          : 'Could not find that city. Try another search.',
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAll(city)
  }, [city, fetchAll])

  return { city, setCity, current, forecast, airQuality, loading, error }
}
