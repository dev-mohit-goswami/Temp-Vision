const AQI_LEVELS = [
  { max: 1, label: 'Good', color: 'success', note: 'Air quality is ideal — enjoy the outdoors.' },
  { max: 2, label: 'Fair', color: 'secondary', note: 'Acceptable for most, sensitive groups take note.' },
  { max: 3, label: 'Moderate', color: 'warning', note: 'Consider limiting prolonged outdoor exertion.' },
  { max: 4, label: 'Poor', color: 'danger', note: 'Reduce outdoor activity, especially if sensitive.' },
  { max: 5, label: 'Very Poor', color: 'danger', note: 'Avoid outdoor exertion where possible.' },
]

const accentClasses = {
  success: 'bg-success/10 text-success',
  secondary: 'bg-secondary/10 text-secondary',
  warning: 'bg-warning/10 text-warning',
  danger: 'bg-danger/10 text-danger',
}

export default function AirQualityCard({ aqi = 1, pm25, pm10, co, no2 }) {
  const level = AQI_LEVELS.find((l) => aqi <= l.max) || AQI_LEVELS[AQI_LEVELS.length - 1]

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-eyebrow">Air Quality Index</p>
          <p className="mt-1 font-data text-4xl font-medium text-dark dark:text-white">{aqi}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${accentClasses[level.color]}`}>
          {level.label}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{level.note}</p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'PM2.5', value: pm25 },
          { label: 'PM10', value: pm10 },
          { label: 'CO', value: co },
          { label: 'NO₂', value: no2 },
        ].map((p) => (
          <div key={p.label} className="rounded-xl bg-slate-100/70 p-3 text-center dark:bg-white/5">
            <p className="font-data text-lg font-medium text-dark dark:text-white">{p.value ?? '—'}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{p.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
