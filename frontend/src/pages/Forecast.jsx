import { FiSun, FiCloud, FiCloudRain } from 'react-icons/fi'
import ForecastCard from '../components/ForecastCard.jsx'
import { useWeather } from '../hooks/useWeather.js'

const icons = [FiSun, FiCloud, FiCloudRain, FiSun, FiCloud, FiSun, FiCloudRain]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function Forecast() {
  const { city } = useWeather('Jaipur')

  return (
    <div>
      <p className="section-eyebrow">Forecast</p>
      <h1 className="mt-1 text-2xl font-semibold">7-day outlook for {city}</h1>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {days.map((day, i) => (
          <ForecastCard
            key={day}
            day={day}
            icon={icons[i]}
            high={26 - i}
            low={16 - i}
            description={i % 2 === 0 ? 'Sunny' : 'Cloudy'}
          />
        ))}
      </div>
    </div>
  )
}
