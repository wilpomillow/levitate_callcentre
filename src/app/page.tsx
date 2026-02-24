import Image from "next/image"
import { Header } from "@/components/site/Header"
import { WavesBackdrop } from "@/components/reactbits/WavesBackdrop"
import { GlowDivider } from "@/components/site/GlowDivider"
import { StatStrip } from "@/components/site/StatStrip"
import { FeatureGrid } from "@/components/site/FeatureGrid"
import { EnrolCTA } from "@/components/site/EnrolCTA"
import { ShineWord } from "@/components/site/ShineWord"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <div
        className="relative"
        style={{
          background:
            "radial-gradient(900px 520px at 20% 12%, rgba(110,199,47,0.18), transparent 60%), radial-gradient(760px 520px at 88% 8%, rgba(38,100,49,0.16), transparent 55%), linear-gradient(120deg, rgba(110,199,47,0.08), transparent 35%), var(--section-1)",
        }}
      >
        <WavesBackdrop className="absolute inset-0 -z-10" />
        <Header />

        <section id="top" className="container-pad pt-16 sm:pt-20 pb-10 sm:pb-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                How To <ShineWord>Levitate</ShineWord>
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
                We specialize in scaling outbound communication to opportunities for maximum conversion. If you have a call centre operation, enrol in our experienced training.
                We wil support your entire staff with 24/7 service with offices based in Malaysia, India, Pakistan, Jamaica and the United States. 
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#enrol" className="btn btn-primary">
                  Enrol now
                </a>

                <a href="#about" className="btn btn-outline">
                  Learn what’s inside
                </a>
              </div>

              <StatStrip variant="big" center />
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow)" }}>
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/hero.jpg"
                    alt="Hero image"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.28) 65%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className="rounded-2xl px-4 py-3"
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        border: "1px solid rgba(110, 199, 47, 0.30)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <p className="text-sm font-semibold text-white/90">
                        "We guarantee at least 15% increase in value extraction."
                      </p>
                      <p className="mt-1 text-xs text-white/70">— Levitate™ Guarantee</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px]"
                style={{
                  background:
                    "radial-gradient(600px 260px at 30% 20%, rgba(110,199,47,0.28), transparent 60%), radial-gradient(520px 260px at 80% 70%, rgba(38,100,49,0.22), transparent 60%)",
                }}
              />
            </div>
          </div>
        </section>
      </div>

      <GlowDivider />

      {/* ABOUT */}
      <div
        style={{
          background:
            "radial-gradient(760px 420px at 10% 35%, rgba(38,100,49,0.14), transparent 60%), radial-gradient(820px 520px at 90% 10%, rgba(110,199,47,0.14), transparent 62%), var(--section-2)",
        }}
      >
        <section id="about" className="container-pad py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About <span style={{ color: "var(--green)" }}>Us</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
              Levitate is a scaling service to optimize anonymized dialing infrastructure. We help curate high-intent prospects and enforce high-pressure conversion tactics.
              Your business will secure revenue rerouting and alternative asset settlement with our propriety method. 
            </p>
          </div>

          <div className="mt-8">
            <FeatureGrid />
          </div>
        </section>
      </div>

      <GlowDivider />

      {/* OPPORTUNITY */}
      <div
        style={{
          background:
            "radial-gradient(820px 520px at 20% 20%, rgba(110,199,47,0.12), transparent 62%), radial-gradient(720px 520px at 80% 75%, rgba(38,100,49,0.12), transparent 62%), var(--section-3)",
        }}
      >
        <section id="opportunity" className="container-pad py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Your <span style={{ color: "var(--green)" }}>Opportunity</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                Sign up today and experience at least a 15% increase in your call returns. 
                Immediately secure our caller ID rotation software, AI 'Magic Script', 'High-Trust' contact list, and access to our international on-call staff. 
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  ["ID Rotation Software", "Complimentary software to bypass scam alerts. Will saves hours spent dialing dead numbers and signficantly reduce risk exposure."],
                  ["AI 'Magic Script'", "Provides your callers with dynamically generated responses to commit to conversion. Minimal training required to learn existing scripts."],
                  ["Live 'High-Trust' Contacts", "Gain access to our curated database of over 3 million contacts who have previously successfully been converted."],
                ].map(([title, desc]) => (
                  <li key={title} className="card rounded-2xl p-4 text-center">
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-center">One Program, Immediate Results</h3>
              <p className="mt-2 text-sm sm:text-base text-center" style={{ color: "var(--muted)" }}>
                A one-time enrolment for a lifetime of service. 
              </p>

              <div className="mt-6 rounded-2xl p-4 soft-border" style={{ background: "rgba(110, 199, 47, 0.06)" }}>
                <p className="text-sm font-semibold text-center" style={{ color: "var(--green-2)" }}>
                  What is included
                </p>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    "24/7 Support Team",
                    "ID Masking",
                    "Real-time AI Scripting",
                    "High-trust Contacts",
                    "Closing Window™ Training",
                    "Guaranteed 15% Uplift",
                  ].map((x) => (
                    <div key={x} className="rounded-xl px-3 py-2 text-center" style={{ background: "rgba(0,0,0,0.08)" }}>
                      <p className="text-sm font-medium">{x}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-center">Impact Statistics (2025)</p>
                <p className="mt-1 text-sm text-center" style={{ color: "var(--muted)" }}>
                  In 2025, our program has achieved for our clients:
                </p>

                <div className="mt-4">
                  <StatStrip variant="compact" center />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <GlowDivider />

      {/* CTA */}
      <div
        style={{
          background:
            "radial-gradient(920px 520px at 50% 0%, rgba(110,199,47,0.10), transparent 60%), var(--section-cta)",
        }}
      >
        <section id="enrol" className="container-pad py-14 sm:py-16">
          <EnrolCTA />
        </section>
      </div>
    </main>
  )
}
