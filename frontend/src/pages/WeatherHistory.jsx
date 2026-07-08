const history = [
  { date: '2026-07-05', city: 'Jaipur', temp: 34, condition: 'Sunny' },
  { date: '2026-07-04', city: 'Jaipur', temp: 33, condition: 'Partly cloudy' },
  { date: '2026-07-03', city: 'Mumbai', temp: 29, condition: 'Rain' },
  { date: '2026-07-02', city: 'Delhi', temp: 36, condition: 'Sunny' },
]

export default function WeatherHistory() {
  return (
    <div>
      <p className="section-eyebrow">History</p>
      <h1 className="mt-1 text-2xl font-semibold">Weather history</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Sample data — wire this up to GET /api/history once the backend persists lookups.
      </p>

      <div className="glass-card mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/60 text-slate-500 dark:border-white/10 dark:text-slate-400">
              <th className="px-5 py-3 font-medium">Date</th>
              <th className="px-5 py-3 font-medium">City</th>
              <th className="px-5 py-3 font-medium">Temp</th>
              <th className="px-5 py-3 font-medium">Condition</th>
            </tr>
          </thead>
          <tbody>
            {history.map((row) => (
              <tr key={`${row.date}-${row.city}`} className="border-b border-slate-100 last:border-0 dark:border-white/5">
                <td className="px-5 py-3 font-data">{row.date}</td>
                <td className="px-5 py-3">{row.city}</td>
                <td className="px-5 py-3 font-data">{row.temp}°C</td>
                <td className="px-5 py-3">{row.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
