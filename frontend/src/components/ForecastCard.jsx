export default function ForecastCard({ day, icon: Icon, high, low, description }) {
  return (
    <div className="glass-card flex flex-col items-center gap-2 p-4 text-center">
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{day}</span>
      <Icon className="h-8 w-8 text-secondary" />
      <span className="text-xs text-slate-500 dark:text-slate-400">{description}</span>
      <div className="flex items-baseline gap-1 font-data">
        <span className="text-lg font-medium text-dark dark:text-white">{high}°</span>
        <span className="text-sm text-slate-400">{low}°</span>
      </div>
    </div>
  )
}
