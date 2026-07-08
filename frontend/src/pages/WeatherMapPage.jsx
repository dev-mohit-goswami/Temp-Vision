import WeatherMap from '../components/WeatherMap.jsx'

export default function WeatherMapPage() {
  return (
    <div>
      <p className="section-eyebrow">Map</p>
      <h1 className="mt-1 text-2xl font-semibold">Weather map</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Current location and any cities you've saved as favorites.
      </p>
      <div className="mt-6">
        <WeatherMap
          markers={[
            { name: 'Jaipur', position: [26.9124, 75.7873], temp: 32 },
            { name: 'Mumbai', position: [19.076, 72.8777], temp: 29 },
            { name: 'Delhi', position: [28.6139, 77.209], temp: 34 },
          ]}
        />
      </div>
    </div>
  )
}
