import { useState } from 'react'

export default function Settings() {
  const [units, setUnits] = useState('metric')
  const [notifications, setNotifications] = useState({ alerts: true, dailySummary: false })

  return (
    <div className="max-w-xl">
      <p className="section-eyebrow">Preferences</p>
      <h1 className="mt-1 text-2xl font-semibold">Settings</h1>

      <div className="glass-card mt-6 p-6">
        <h2 className="font-medium">Units</h2>
        <div className="mt-3 flex gap-2">
          {['metric', 'imperial'].map((u) => (
            <button
              key={u}
              onClick={() => setUnits(u)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                units === u ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'
              }`}
            >
              {u === 'metric' ? 'Celsius' : 'Fahrenheit'}
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card mt-6 p-6">
        <h2 className="font-medium">Notifications</h2>
        <div className="mt-3 flex flex-col gap-3">
          <label className="flex items-center justify-between text-sm">
            Severe weather alerts
            <input
              type="checkbox"
              checked={notifications.alerts}
              onChange={(e) => setNotifications((n) => ({ ...n, alerts: e.target.checked }))}
              className="h-4 w-4 accent-primary"
            />
          </label>
          <label className="flex items-center justify-between text-sm">
            Daily summary email
            <input
              type="checkbox"
              checked={notifications.dailySummary}
              onChange={(e) => setNotifications((n) => ({ ...n, dailySummary: e.target.checked }))}
              className="h-4 w-4 accent-primary"
            />
          </label>
        </div>
      </div>
    </div>
  )
}
