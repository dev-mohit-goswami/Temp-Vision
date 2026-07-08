import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiCloudRain } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/forecast', label: 'Forecast' },
  { to: '/air-quality', label: 'Air Quality' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuth()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-primary dark:text-secondary'
        : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-secondary'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-glass dark:border-white/5 dark:bg-dark/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-dark dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
            <FiCloudRain className="h-4 w-4" />
          </span>
          TempVision
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          {user ? (
            <button onClick={logout} className="btn-ghost">
              Sign out
            </button>
          ) : (
            <>
              <Link to="/login" className="btn-ghost">Log in</Link>
              <Link to="/register" className="btn-primary">Get started</Link>
            </>
          )}
        </div>

        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200/60 bg-white px-4 py-4 dark:border-white/5 dark:bg-dark md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
                {l.label}
              </NavLink>
            ))}
            <div className="flex items-center justify-between pt-2">
              <ThemeToggle />
              {user ? (
                <button onClick={logout} className="btn-ghost">Sign out</button>
              ) : (
                <div className="flex gap-2">
                  <Link to="/login" className="btn-ghost" onClick={() => setOpen(false)}>Log in</Link>
                  <Link to="/register" className="btn-primary" onClick={() => setOpen(false)}>Get started</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
