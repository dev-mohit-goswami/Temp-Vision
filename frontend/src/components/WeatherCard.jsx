import { FiDroplet, FiWind, FiEye, FiThermometer, FiSun } from 'react-icons/fi'
import { WiBarometer } from 'react-icons/wi'

const iconMap = {
  temperature: FiThermometer,
  humidity: FiDroplet,
  wind: FiWind,
  pressure: WiBarometer,
  visibility: FiEye,
  uv: FiSun,
}

// Tailwind's JIT scanner needs full, static class names — it can't resolve
// `bg-${accent}/10`, so each accent gets its own explicit entry here.
const accentClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
  warning: 'bg-warning/10 text-warning',
  danger: 'bg-danger/10 text-danger',
}

export default function WeatherCard({ type, label, value, unit, accent = 'primary' }) {
  const Icon = iconMap[type] || FiThermometer

  return (
    <div className="glass-card animate-rise flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <span className="section-eyebrow">{label}</span>
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${accentClasses[accent] || accentClasses.primary}`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="stat-figure text-dark dark:text-white">{value}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{unit}</span>
      </div>
    </div>
  )
}
