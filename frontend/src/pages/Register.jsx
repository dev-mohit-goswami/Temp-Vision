import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  const onSubmit = async (values) => {
    try {
      await registerUser(values)
      navigate('/dashboard')
    } catch {
      setServerError('Could not create your account. Please try again.')
    }
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center px-4 sm:px-6 lg:px-8">
      <div className="glass-card w-full p-8">
        <h1 className="text-2xl font-semibold">Create your account</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Track weather and air quality across your favorite cities.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Full name</label>
            <input
              {...register('name', { required: true })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
            />
            {errors.name && <p className="mt-1 text-xs text-danger">Name is required.</p>}
          </div>
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
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input
              type="password"
              {...register('password', { required: true, minLength: 6 })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
            />
            {errors.password && <p className="mt-1 text-xs text-danger">Minimum 6 characters.</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Confirm password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: (v) => v === watch('password') || 'Passwords must match',
              })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-danger">{errors.confirmPassword.message || 'Passwords must match.'}</p>
            )}
          </div>

          {serverError && <p className="text-sm text-danger">{serverError}</p>}

          <button type="submit" className="btn-primary mt-2">Create account</button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          Already have an account? <Link to="/login" className="text-secondary hover:underline">Log in</Link>
        </p>
      </div>
    </section>
  )
}
