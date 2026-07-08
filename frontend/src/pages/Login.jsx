import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { login } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  const onSubmit = async (values) => {
    try {
      await login(values)
      navigate('/dashboard')
    } catch {
      setServerError('Could not sign you in. Check your credentials and try again.')
    }
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-4 sm:px-6 lg:px-8">
      <div className="glass-card w-full p-8">
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Log in to your TempVision dashboard.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
            />
            {errors.email && <p className="mt-1 text-xs text-danger">Email is required.</p>}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="mb-1 block text-sm font-medium">Password</label>
              <Link to="/forgot-password" className="text-xs text-secondary hover:underline">Forgot password?</Link>
            </div>
            <input
              type="password"
              {...register('password', { required: true, minLength: 6 })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
            />
            {errors.password && <p className="mt-1 text-xs text-danger">Minimum 6 characters.</p>}
          </div>

          {serverError && <p className="text-sm text-danger">{serverError}</p>}

          <button type="submit" className="btn-primary mt-2">Log in</button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Don't have an account? <Link to="/register" className="text-secondary hover:underline">Register</Link>
        </p>
      </div>
    </section>
  )
}
