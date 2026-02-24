"use client"

import * as React from "react"

/**
 * ReactBits-inspired: animated border shimmer.
 * Uses pure CSS conic gradient + mask.
 */
export function StarBorder({
  children,
  color = "rgba(110,199,47,0.92)",
  speedMs = 2600,
  radius = 24,
  className,
}: {
  children: React.ReactNode
  color?: string
  speedMs?: number
  radius?: number
  className?: string
}) {
  return (
    <div className={className} style={{ position: "relative", borderRadius: radius }}>
      <div
        aria-hidden="true"
        className="rb-star"
        style={{
          borderRadius: radius,
          ["--rb-color" as any]: color,
          ["--rb-speed" as any]: `${speedMs}ms`,
        }}
      />
      <div style={{ position: "relative", borderRadius: radius }}>
        {children}
      </div>

      <style jsx>{`
        .rb-star {
          position: absolute;
          inset: -1px;
          padding: 1px;
          background: conic-gradient(
            from 180deg,
            transparent 0deg,
            var(--rb-color) 35deg,
            transparent 90deg,
            var(--rb-color) 150deg,
            transparent 210deg,
            var(--rb-color) 270deg,
            transparent 320deg,
            var(--rb-color) 360deg
          );
          animation: rb-spin var(--rb-speed) linear infinite;
          filter: drop-shadow(0 14px 30px rgba(110,199,47,0.20));
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @keyframes rb-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
