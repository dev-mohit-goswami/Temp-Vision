# TempVision — Frontend

React + Vite + Tailwind scaffold for TempVision, an AI-powered weather & environmental
intelligence dashboard. This is the **frontend only** — it's built to pair with a Spring
Boot backend later (see `src/services/api.js` for the connection point), but runs on its
own against the OpenWeatherMap API in the meantime.

## Getting started

```bash
npm install
cp .env.example .env
# edit .env and add your OpenWeatherMap API key
npm run dev
```

Get a free API key at https://openweathermap.org/api — the free tier covers current
weather, 5-day/3-hour forecast, and air pollution endpoints, which is everything this
scaffold uses.

## What's built

- **Routing**: `react-router-dom` with a public layout (Home, About, Contact, Login,
  Register, Forecast, Air Quality) and a dashboard layout with a sidebar (Overview, Map,
  Favorites, History, Profile, Settings).
- **Theming**: dark/light mode via `ThemeContext`, persisted to `localStorage`,
  defaulting to the system preference.
- **Auth**: `AuthContext` is a working stub (stores a fake user in `localStorage`) —
  swap the two `TODO` spots in `src/context/AuthContext.jsx` for real calls to
  `/api/auth/login` and `/api/auth/register` once the Spring Boot backend exists.
- **Live weather data**: `useWeather` hook pulls current conditions and air quality
  from OpenWeatherMap for whatever city is searched.
- **Components**: glassmorphism cards, a live sky-gradient hero banner that tracks the
  real time of day, weather metric cards, forecast cards, an AQI card, a Leaflet map,
  and a Chart.js line chart wrapper.

## What's stubbed / next steps

- The 7-day forecast and dashboard trend charts currently use placeholder numbers —
  OpenWeatherMap's free tier gives 5 days in 3-hour steps, so aggregate that into daily
  highs/lows once you're ready, or switch to One Call API 3.0 (separate subscription).
- Favorites and history pages store data in local component state — connect them to the
  Spring Boot backend's favorites/history endpoints when built.
- No real refresh-token flow yet; `src/services/api.js` is ready to receive a JWT via
  an `Authorization: Bearer` header, but the login/register calls themselves are stubs.

## Tech stack

React 18 · Vite · Tailwind CSS · React Router · Axios · Chart.js · Leaflet ·
React Hook Form · React Icons · Framer Motion (installed, not yet used — good for
page-transition polish next).
