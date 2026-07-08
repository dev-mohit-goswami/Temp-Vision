import { useMemo } from 'react'

/**
 * Renders a horizon scene whose gradient, sun/moon position, and star
 * visibility are derived from the viewer's actual local hour — the
 * hero reflects the sky outside their window, not a static illustration.
 */
export default function SkyBanner({ condition = 'clear' }) {
  const hour = new Date().getHours()

  const { skyFrom, skyTo, bodyColor, bodyY, showStars } = useMemo(() => {
    // 0 = midnight, 12 = noon
    const dayProgress = Math.sin(((hour - 6) / 12) * Math.PI) // -1..1, peak at noon
    const isNight = hour < 5 || hour >= 20
    const y = 78 - dayProgress * 55 // higher in sky at noon, low at dawn/dusk

    if (isNight) {
      return { skyFrom: '#0F172A', skyTo: '#1E293B', bodyColor: '#E2E8F0', bodyY: 30, showStars: true }
    }
    if (hour < 8 || hour >= 17) {
      return { skyFrom: '#1E3A8A', skyTo: '#F59E0B', bodyColor: '#FDE68A', bodyY: y, showStars: false }
    }
    return { skyFrom: '#2563EB', skyTo: '#7DD3FC', bodyColor: '#FEF3C7', bodyY: y, showStars: false }
  }, [hour])

  return (
    <svg viewBox="0 0 800 320" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={skyFrom} />
          <stop offset="100%" stopColor={skyTo} />
        </linearGradient>
      </defs>
      <rect width="800" height="320" fill="url(#sky)" />

      {showStars &&
        [...Array(24)].map((_, i) => (
          <circle
            key={i}
            cx={(i * 137) % 800}
            cy={(i * 53) % 180}
            r={i % 5 === 0 ? 1.6 : 0.9}
            fill="#F8FAFC"
            opacity={0.6}
          />
        ))}

      <circle cx="640" cy={bodyY} r="26" fill={bodyColor} opacity="0.95" />
      <circle cx="640" cy={bodyY} r="40" fill={bodyColor} opacity="0.15" />

      <g className="animate-drift" opacity="0.85">
        <ellipse cx="150" cy="90" rx="70" ry="22" fill="#F8FAFC" opacity="0.8" />
        <ellipse cx="200" cy="80" rx="50" ry="18" fill="#F8FAFC" opacity="0.7" />
      </g>
      <g className="animate-drift" style={{ animationDelay: '2s' }} opacity="0.6">
        <ellipse cx="420" cy="150" rx="60" ry="18" fill="#F8FAFC" opacity="0.6" />
      </g>

      <path
        d="M0 260 Q 200 220 400 250 T 800 240 V320 H0 Z"
        fill="#0F172A"
        opacity="0.9"
      />
      <path
        d="M0 275 Q 200 240 400 265 T 800 260 V320 H0 Z"
        fill="#0F172A"
      />
    </svg>
  )
}
