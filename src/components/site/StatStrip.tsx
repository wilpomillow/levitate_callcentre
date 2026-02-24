"use client"

import * as React from "react"

type Stat = { label: string; value: number; suffix?: string }

const big: Stat[] = [
  { label: "Minutes to Start", value: 3, suffix: "m" },
  { label: "Weekly Focus Blocks", value: 5 },
  { label: "Momentum Score™", value: 92, suffix: "%" },
]

const compact: Stat[] = [
  { label: "Successful Calls ↑", value: 32, suffix: "%" },
  { label: "Recovered Calls ↑", value: 23, suffix: "%" },
  { label: "Hang Up Rate ↓", value: 18, suffix: "%" },
]

function useCountTo(target: number, durationMs: number) {
  const [v, setV] = React.useState(0)

  React.useEffect(() => {
    let raf = 0
    const start = performance.now()

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3)
      setV(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])

  return v
}

export function StatStrip({ variant = "big", center = false }: { variant?: "big" | "compact"; center?: boolean }) {
  const stats = variant === "big" ? big : compact
  const wrapMax = variant === "compact" ? "max-w-xl" : "max-w-3xl"

  return (
    <div className={`${variant === "big" ? "mt-8" : ""} ${center ? `mx-auto ${wrapMax}` : ""}`}>
      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((s, idx) => (
          <StatPill
            key={s.label}
            label={s.label}
            value={s.value}
            suffix={s.suffix}
            delay={idx * 120}
            center={center}
          />
        ))}
      </div>
    </div>
  )
}

function StatPill({
  label,
  value,
  suffix,
  delay,
  center,
}: {
  label: string
  value: number
  suffix?: string
  delay: number
  center: boolean
}) {
  const [armed, setArmed] = React.useState(false)
  const shown = useCountTo(armed ? value : 0, 1100)

  React.useEffect(() => {
    const t = window.setTimeout(() => setArmed(true), 220 + delay)
    return () => window.clearTimeout(t)
  }, [delay])

  return (
    <div className={`card rounded-2xl px-4 py-3 ${center ? "text-center" : ""}`}>
      <p className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
        {label}
      </p>
      <p className="mt-1 text-xl font-extrabold tracking-tight">
        {shown}
        {suffix ?? ""}
      </p>
    </div>
  )
}
