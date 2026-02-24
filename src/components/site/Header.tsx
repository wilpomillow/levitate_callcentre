"use client"

import * as React from "react"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme/ThemeProvider"

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Full-width top bar */}
      <div
        className="w-full"
        style={{
          background: "var(--panel)",
          borderBottom: "1px solid rgba(110, 199, 47, 0.20)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="container-pad">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollToId("top")}
              className="inline-flex items-center rounded-2xl px-2 py-2 transition-opacity hover:opacity-90"
              aria-label="Go to top"
            >
              <Image
                src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="Levitate"
                width={180}
                height={48}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </button>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle theme"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="icon-btn"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Enrol CTA */}
              <button
                type="button"
                onClick={() => scrollToId("enrol")}
                className="btn btn-primary"
              >
                Enrol now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}