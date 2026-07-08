import { useState } from 'react'
import { FiHeart, FiPlus, FiTrash2 } from 'react-icons/fi'

export default function FavoriteCities() {
  const [cities, setCities] = useState(['Jaipur', 'Mumbai'])
  const [input, setInput] = useState('')

  const addCity = (e) => {
    e.preventDefault()
    const name = input.trim()
    if (name && !cities.includes(name)) setCities([...cities, name])
    setInput('')
  }

  const removeCity = (name) => setCities(cities.filter((c) => c !== name))

  return (
    <div>
      <p className="section-eyebrow">Favorites</p>
      <h1 className="mt-1 text-2xl font-semibold">Favorite cities</h1>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Saved locally for now — this will sync to your account once the backend favorites endpoint is connected.
      </p>

      <form onSubmit={addCity} className="mt-6 flex max-w-md gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a city..."
          className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
        />
        <button type="submit" className="btn-primary">
          <FiPlus className="h-4 w-4" />
        </button>
      </form>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <div key={city} className="glass-card flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <FiHeart className="h-4 w-4 text-danger" />
              <span className="font-medium">{city}</span>
            </div>
            <button onClick={() => removeCity(city)} aria-label={`Remove ${city}`}>
              <FiTrash2 className="h-4 w-4 text-slate-400 hover:text-danger" />
            </button>
          </div>
        ))}
        {cities.length === 0 && (
          <p className="text-sm text-slate-500 dark:text-slate-400">No favorite cities yet.</p>
        )}
      </div>
    </div>
  )
}
