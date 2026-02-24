"use client"

import * as React from "react"

export function WavesBackdrop({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="waves" />
      <style jsx>{`
        .waves {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(900px 520px at 20% 12%, rgba(110,199,47,0.20), transparent 60%),
            radial-gradient(760px 520px at 88% 8%, rgba(38,100,49,0.18), transparent 55%),
            linear-gradient(120deg, rgba(110,199,47,0.10), transparent 35%);
          filter: saturate(1.12);
        }
      `}</style>
    </div>
  )
}
