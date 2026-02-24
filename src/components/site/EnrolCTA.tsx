"use client"

import * as React from "react"
import { ArrowRight, CreditCard, CheckCircle2 } from "lucide-react"
import { ClickSpark } from "@/components/reactbits/ClickSpark"
import { ShineBorder } from "@/components/reactbits/ShineBorder"

type Status = "idle" | "loading" | "success" | "error"

const PRICE_AMOUNT = "100"
const PRICE_CURRENCY = "USD"
const PRICE_BADGE = `$${PRICE_AMOUNT} ${PRICE_CURRENCY}`

export function EnrolCTA() {
  const [status, setStatus] = React.useState<Status>("idle")
  const [message, setMessage] = React.useState<string | null>(null)

  const onEnrol = async () => {
    setStatus("loading")
    setMessage(null)

    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" })
      const data = (await res.json()) as { ok: boolean; url?: string; error?: string }
      if (!data.ok || !data.url) throw new Error(data.error || "Checkout failed")

      setStatus("success")
      window.location.href = data.url
    } catch (e: any) {
      setStatus("error")
      setMessage(e?.message ?? "Something went wrong")
    }
  }

  return (
    <div className="relative">
      {/* clean pure white */}
      <div
        className="rounded-[32px] p-6 sm:p-10 overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(110, 199, 47, 0.22)",
          boxShadow: "0 18px 60px rgba(0,0,0,0.14)",
          color: "#1f2937",
        }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(110,199,47,0.22), transparent 62%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(38,100,49,0.16), transparent 64%)" }}
        />

        <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left copy */}
          <div>
            <p className="text-xs font-semibold" style={{ color: "rgba(31,41,55,0.72)" }}>
              Ready to build motivation you can trust?
            </p>

            <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enrol in <span style={{ color: "var(--green)" }}>Levitate</span>
            </h3>

            <p className="mt-3 text-base sm:text-lg" style={{ color: "rgba(31,41,55,0.72)" }}>
              One checkout now. Lifetime access later.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {[
                "Maximize value extraction from your calls",
                "Reduce time wasted and risk taken",
                "Access to bespoke tools to optimize your business",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2">
                  <CheckCircle2 size={18} style={{ color: "var(--green)" }} />
                  <p className="text-sm" style={{ color: "rgba(31,41,55,0.72)" }}>
                    {t}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right checkout card */}
          <div className="relative">
            <div
              className="rounded-3xl p-5"
              style={{
                background: "rgba(0,0,0,0.03)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">Checkout</p>
                </div>
              </div>

              {/* Price line (directly above the button) */}
              <div className="mt-5 mb-3 flex items-baseline justify-center gap-2">
                <span className="text-3xl font-extrabold tracking-tight">${PRICE_AMOUNT}</span>
                <span className="text-sm font-semibold" style={{ color: "rgba(31,41,55,0.6)" }}>
                  {PRICE_CURRENCY} · one-time
                </span>
              </div>

              <ClickSpark sparkColor="rgba(110,199,47,0.95)" sparkCount={12} sparkRadius={26}>
                <ShineBorder color="rgba(110,199,47,0.92)" speedMs={2200} radius={24}>
                  <button
                    type="button"
                    onClick={onEnrol}
                    className="btn btn-primary w-full enrol-outline"
                    disabled={status === "loading"}
                    aria-busy={status === "loading"}
                  >
                    <CreditCard size={18} />
                    {status === "loading" ? "Starting checkout…" : "Enrol now"}
                    <ArrowRight size={18} />
                  </button>
                </ShineBorder>
              </ClickSpark>

              {status === "error" && (
                <p className="mt-3 text-sm" style={{ color: "#ef4444" }}>
                  {message}
                </p>
              )}
              {status === "success" && (
                <p className="mt-3 text-sm" style={{ color: "rgba(31,41,55,0.72)" }}>
                  Redirecting to Stripe…
                </p>
              )}

              <p className="mt-4 text-xs" style={{ color: "rgba(31,41,55,0.72)" }}>
                All purchases are fraud protected: For your security minimal transaction data is stored and shared.
                Refunds are available if service is unsatifactory upon request.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .enrol-outline {
          position: relative;
        }
        .enrol-outline::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            90deg,
            rgba(110, 199, 47, 0.25),
            rgba(255, 255, 255, 0.55),
            rgba(110, 199, 47, 0.25)
          );
          background-size: 220% 100%;
          animation: outline-sweep 2.2s ease-in-out infinite;
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.9;
        }
        @keyframes outline-sweep {
          0% {
            background-position: 0% 50%;
            opacity: 0.2;
          }
          35% {
            opacity: 0.95;
          }
          60% {
            background-position: 100% 50%;
            opacity: 0.65;
          }
          100% {
            background-position: 100% 50%;
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  )
}