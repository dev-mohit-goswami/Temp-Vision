import { useAuth } from '../context/AuthContext.jsx'
import { useWeather } from '../hooks/useWeather.js'
import WeatherCard from '../components/WeatherCard.jsx'
import AnalyticsChart from '../components/AnalyticsChart.jsx'
import { FiHeart, FiClock, FiAlertTriangle } from 'react-icons/fi'

export default function Dashboard() {
  const { user } = useAuth()
  const { city, current } = useWeather('Jaipur')

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="section-eyebrow">Dashboard</p>
        <h1 className="mt-1 text-2xl font-semibold">
          {user ? `Welcome back, ${user.name}` : 'Welcome'}
        </h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Here's what's happening in {city} right now.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <WeatherCard type="temperature" label="Temperature" value={current ? Math.round(current.main.temp) : '—'} unit="°C" accent="primary" />
        <WeatherCard type="humidity" label="Humidity" value={current ? current.main.humidity : '—'} unit="%" accent="secondary" />
        <WeatherCard type="wind" label="Wind" value={current ? current.wind.speed : '—'} unit="m/s" accent="accent" />
        <WeatherCard type="uv" label="AQI" value="2" unit="/5" accent="warning" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AnalyticsChart
            title="AQI trend, last 7 days"
            labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
            data={[2, 3, 2, 1, 2, 3, 2]}
            color="#14B8A6"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 text-secondary">
              <FiHeart className="h-4 w-4" />
              <p className="section-eyebrow">Favorite cities</p>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              No favorites saved yet — add cities from the search bar to track them here.
            </p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 text-primary">
              <FiClock className="h-4 w-4" />
              <p className="section-eyebrow">Recent searches</p>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{city}</p>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 text-warning">
              <FiAlertTriangle className="h-4 w-4" />
              <p className="section-eyebrow">Weather alerts</p>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">No active alerts for your area.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
