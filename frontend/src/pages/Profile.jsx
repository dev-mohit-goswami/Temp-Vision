import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext.jsx'
import { useState } from 'react'

export default function Profile() {
  const { user } = useAuth()
  const { register, handleSubmit } = useForm({ defaultValues: { name: user?.name, email: user?.email } })
  const [saved, setSaved] = useState(false)

  const onSubmit = () => {
    // TODO: PUT /api/users/me
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="max-w-xl">
      <p className="section-eyebrow">Account</p>
      <h1 className="mt-1 text-2xl font-semibold">Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="glass-card mt-6 flex flex-col gap-4 p-6">
        <div>
          <label className="mb-1 block text-sm font-medium">Full name</label>
          <input
            {...register('name')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            {...register('email')}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
          />
        </div>
        <button type="submit" className="btn-primary self-start">Save changes</button>
        {saved && <p className="text-sm text-success">Profile updated.</p>}
      </form>
    </div>
  )
}
