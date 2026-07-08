import axios from 'axios'

// Get a free key at https://openweathermap.org/api and put it in .env as
// VITE_WEATHER_API_KEY=xxxxxxxx (see .env.example)
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const GEO_URL = 'https://api.openweathermap.org/geo/1.0'
const url =
  "https://api.open-meteo.com/v1/forecast?latitude=23.0225&longitude=72.5714&current=temperature_2m,relative_humidity_2m,wind_speed_10m";
const client = axios.create({ baseURL: BASE_URL })

export async function getCurrentWeather(city) {
  const { data } = await client.get('/weather', {
    params: { q: city, appid: API_KEY, units: 'metric' },
  })
  return data
}

export async function getForecast(city) {
  const { data } = await client.get('/forecast', {
    params: { q: city, appid: API_KEY, units: 'metric' },
  })
  return data
}

export async function getAirQuality(lat, lon) {
  const { data } = await client.get('/air_pollution', {
    params: { lat, lon, appid: API_KEY },
  })
  return data
}

export async function geocodeCity(city) {
  const { data } = await axios.get(`${GEO_URL}/direct`, {
    params: { q: city, limit: 1, appid: API_KEY },
  })
  return data?.[0]
}

export async function getCurrentWeatherByCoords(lat, lon) {
  const { data } = await client.get('/weather', {
    params: { lat, lon, appid: API_KEY, units: 'metric' },
  })
  return data
}
