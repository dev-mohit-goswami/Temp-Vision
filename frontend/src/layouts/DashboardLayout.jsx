import { NavLink, Outlet } from 'react-router-dom'
import {
  FiGrid,
  FiCloud,
  FiWind,
  FiMap,
  FiHeart,
  FiClock,
  FiUser,
  FiSettings,
} from 'react-icons/fi'
import Navbar from '../components/Navbar.jsx'

const sidebarLinks = [
  { to: '/dashboard', label: 'Overview', icon: FiGrid, end: true },
  { to: '/forecast', label: '7-Day Forecast', icon: FiCloud },
  { to: '/air-quality', label: 'Air Quality', icon: FiWind },
  { to: '/map', label: 'Weather Map', icon: FiMap },
  { to: '/favorites', label: 'Favorite Cities', icon: FiHeart },
  { to: '/history', label: 'Weather History', icon: FiClock },
  { to: '/profile', label: 'Profile', icon: FiUser },
  { to: '/settings', label: 'Settings', icon: FiSettings },
]

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface dark:bg-dark">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <aside className="hidden w-56 shrink-0 md:block">
          <nav className="glass-card sticky top-24 flex flex-col gap-1 p-3">
            {sidebarLinks.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                  }`
                }
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
