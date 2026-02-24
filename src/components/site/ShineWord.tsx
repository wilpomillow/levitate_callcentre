"use client"

import * as React from "react"

export function ShineWord({
  children,
  className,
  color = "var(--green)",
}: {
  children: React.ReactNode
  className?: string
  color?: string
}) {
  return (
    <span className={`shine-word ${className ?? ""}`} style={{ color }}>
      {children}
      <style jsx>{`
        .shine-word {
          position: relative;
          display: inline-block;
          text-shadow: 0 0 18px rgba(110, 199, 47, 0.22);
        }
        .shine-word::after {
          content: "";
          position: absolute;
          right: -18%;
          top: -40%;
          width: 90%;
          height: 140%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.0) 25%,
            rgba(255, 255, 255, 0.55) 45%,
            rgba(255, 255, 255, 0.0) 70%,
            transparent 100%
          );
          transform: translateX(60%) translateY(-20%) rotate(10deg);
          animation: shine-corner 2.8s ease-in-out infinite;
          mix-blend-mode: overlay;
          pointer-events: none;
          opacity: 0;
        }
        @keyframes shine-corner {
          0% {
            opacity: 0;
            transform: translateX(70%) translateY(-25%) rotate(10deg);
          }
          18% {
            opacity: 0.85;
          }
          45% {
            opacity: 0.25;
            transform: translateX(-10%) translateY(10%) rotate(10deg);
          }
          70% {
            opacity: 0;
            transform: translateX(-25%) translateY(18%) rotate(10deg);
          }
          100% {
            opacity: 0;
            transform: translateX(-25%) translateY(18%) rotate(10deg);
          }
        }
      `}</style>
    </span>
  )
}
