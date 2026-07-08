import AirQualityCard from '../components/AirQualityCard.jsx'
import AnalyticsChart from '../components/AnalyticsChart.jsx'
import { useWeather } from '../hooks/useWeather.js'

export default function AirQuality() {
  const { city, airQuality } = useWeather('Jaipur')
  const aqi = airQuality?.list?.[0]?.main?.aqi
  const components = airQuality?.list?.[0]?.components

  return (
    <div>
      <p className="section-eyebrow">Air Quality</p>
      <h1 className="mt-1 text-2xl font-semibold">Pollutant breakdown for {city}</h1>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <AirQualityCard
          aqi={aqi || 2}
          pm25={components?.pm2_5?.toFixed(1)}
          pm10={components?.pm10?.toFixed(1)}
          co={components?.co?.toFixed(0)}
          no2={components?.no2?.toFixed(1)}
        />
        <AnalyticsChart
          title="AQI, last 7 days"
          labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
          data={[2, 3, 2, 1, 2, 3, 2]}
          color="#14B8A6"
        />
      </div>
    </div>
  )
}
