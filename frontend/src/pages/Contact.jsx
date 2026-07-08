import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = () => {
    // TODO: POST to /api/contact once the backend supports it
    setSent(true)
    reset()
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="section-eyebrow">Get in touch</p>
      <h1 className="mt-2 text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Questions, bug reports, or feature ideas — send them over.
      </p>

      {sent ? (
        <div className="glass-card mt-8 p-6 text-sm text-success">
          Message sent. Thanks for reaching out.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="glass-card mt-8 flex flex-col gap-4 p-6">
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
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
            {errors.email && <p className="mt-1 text-xs text-danger">A valid email is required.</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea
              rows={4}
              {...register('message', { required: true })}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
            />
            {errors.message && <p className="mt-1 text-xs text-danger">Message can't be empty.</p>}
          </div>
          <button type="submit" className="btn-primary self-start">Send message</button>
        </form>
      )}
    </section>
  )
}
