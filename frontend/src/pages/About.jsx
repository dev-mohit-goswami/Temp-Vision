export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="section-eyebrow">About TempVision</p>
      <h1 className="mt-2 text-3xl font-semibold">Weather data, read like a dashboard, not a forecast script.</h1>
      <p className="mt-6 text-slate-600 dark:text-slate-300">
        TempVision was built to turn scattered weather and air-quality feeds into a single,
        legible view: live conditions, a 7-day outlook, pollutant breakdowns, and trend
        charts, all in one place. It's a portfolio project showing a full-stack pattern —
        a React interface backed by a Spring Boot API — applied to a domain everyone
        already checks daily.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="font-semibold">Frontend</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            React, Tailwind CSS, Chart.js, and Leaflet, wired together with a small set of
            hooks and context providers rather than a heavy state library.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="font-semibold">Backend</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Spring Boot with JWT authentication, JPA, and a clean layered structure —
            controller, service, repository — ready to persist favorites and history.
          </p>
        </div>
      </div>
    </section>
  )
}
