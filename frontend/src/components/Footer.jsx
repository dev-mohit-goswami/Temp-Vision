import { Link } from 'react-router-dom'
import { FiGithub } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white dark:border-white/5 dark:bg-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-dark dark:text-white">TempVision</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Environmental intelligence for people who plan their day around the sky.
          </p>
        </div>

        <div>
          <p className="section-eyebrow">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-eyebrow">Product</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li><Link to="/forecast" className="hover:text-primary">Forecast</Link></li>
            <li><Link to="/air-quality" className="hover:text-primary">Air Quality</Link></li>
            <li><Link to="/dashboard" className="hover:text-primary">Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-eyebrow">Resources</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary"
              >
                <FiGithub className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li><Link to="/contact" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/60 py-4 text-center text-xs text-slate-400 dark:border-white/5">
        © {new Date().getFullYear()} TempVision. Built for learning, not liability — always check an official source before a storm.
      </div>
    </footer>
  )
}
