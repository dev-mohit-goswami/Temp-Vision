import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative flex h-9 w-16 items-center rounded-full border border-slate-300/60 bg-slate-100 px-1 transition-colors dark:border-white/10 dark:bg-white/5"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 dark:bg-dark ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <FiMoon className="h-4 w-4 text-secondary" />
        ) : (
          <FiSun className="h-4 w-4 text-warning" />
        )}
      </span>
    </button>
  )
}
