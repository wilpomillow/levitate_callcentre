"use client"

import * as React from "react"

type Props = {
  children: React.ReactNode
  sparkColor?: string
  sparkCount?: number
  sparkRadius?: number
}

type Spark = { id: string; x: number; y: number; r: number; a: number }

export function ClickSpark({
  children,
  sparkColor = "rgba(110,199,47,0.95)",
  sparkCount = 10,
  sparkRadius = 28,
}: Props) {
  const [sparks, setSparks] = React.useState<Spark[]>([])

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const next: Spark[] = Array.from({ length: sparkCount }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      x,
      y,
      r: sparkRadius * (0.35 + Math.random() * 0.75),
      a: Math.random() * Math.PI * 2,
    }))

    setSparks(next)
    window.setTimeout(() => setSparks([]), 520)
  }

  return (
    <div onClick={onClick} style={{ position: "relative" }}>
      {children}
      {sparks.map((s) => (
        <span
          key={s.id}
          aria-hidden="true"
          style={{
            position: "absolute",
            left: s.x,
            top: s.y,
            width: 6,
            height: 6,
            borderRadius: 999,
            background: sparkColor,
            transform: `translate(-50%, -50%) translate(${Math.cos(s.a) * s.r}px, ${Math.sin(s.a) * s.r}px)`,
            opacity: 0.9,
            filter: "blur(0.2px)",
            animation: "spark 520ms ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes spark {
          0% {
            opacity: 0.95;
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translate(0px, 0px) scale(0.5);
          }
        }
      `}</style>
    </div>
  )
}
