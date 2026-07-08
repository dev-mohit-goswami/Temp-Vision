import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="font-data text-6xl font-medium text-primary">404</p>
      <h1 className="mt-4 text-2xl font-semibold">This forecast doesn't exist.</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">The page you're looking for has drifted off, like a cloud.</p>
      <Link to="/" className="btn-primary mt-6">Back to home</Link>
    </section>
  )
}
