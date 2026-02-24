"use client"

import * as React from "react"

export function ShineBorder({
  children,
  radius = 24,
  color = "rgba(110,199,47,0.92)",
  speedMs = 2200,
  className,
}: {
  children: React.ReactNode
  radius?: number
  color?: string
  speedMs?: number
  className?: string
}) {
  return (
    <div className={className} style={{ position: "relative", borderRadius: radius, padding: 1 }}>
      <div
        aria-hidden="true"
        className="shine"
        style={{
          borderRadius: radius,
          ["--shine-color" as any]: color,
          ["--shine-speed" as any]: `${speedMs}ms`,
        }}
      />
      <div style={{ position: "relative", borderRadius: radius }}>{children}</div>

      <style jsx>{`
        .shine {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .shine::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(90deg, rgba(110, 199, 47, 0.32), rgba(110, 199, 47, 0.32));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        .shine::after {
          content: "";
          position: absolute;
          top: -40%;
          bottom: -40%;
          width: 35%;
          left: -40%;
          border-radius: 999px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.65), transparent);
          transform: skewX(-18deg);
          filter: drop-shadow(0 0 14px var(--shine-color));
          animation: sweep var(--shine-speed) ease-in-out infinite;
          opacity: 0.9;
        }
        @keyframes sweep {
          0% {
            left: -45%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          55% {
            left: 110%;
            opacity: 1;
          }
          75% {
            opacity: 0;
          }
          100% {
            left: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
