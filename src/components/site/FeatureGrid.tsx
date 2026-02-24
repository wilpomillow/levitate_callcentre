import { Brain, Target, Timer, ShieldCheck, Wand2, Orbit } from "lucide-react"

const items = [
  { icon: Brain, title: "Neuro Linguistics", desc: "Our scripts are engineered using cognitive bias triggers such as fear, authority, and greed, to bypass the target's rational defense and trigger an immediate emotional response." },
  { icon: Target, title: "Precision Profiling", desc: "Our database targets the most vulnerable demographics: the digitally disconnected, the financially distressed, and those with high-limit credit cards. Make every dial hit." },
  { icon: Timer, title: "Urgency Velocity", desc: "We specialize in creating the 'Closing Window™'. Using time-pressure tactics to force a decision in under 300 seconds, ensuring your agents are always on a live line." },
  { icon: ShieldCheck, title: "Detection Anonymity", desc: "Complimentary software upon enrolment will rotates caller IDs and mimics local exchange carriers, making your calls invisible to 'Scam Likely' filters and STIR/SHAKEN protocols." },
  { icon: Wand2, title: "Magic Rebuttal", desc: "Our AI-assisted 'Magic Script' provides real-time rebuttals for every common objection. Our agents have the perfect lie ready to pivot the conversation back to the payout." },
  { icon: Orbit, title: "Re-Victimization Loop", desc: "Once a target pays, they enter our 'High-Trust' cycle. We will is list of previous targets, as they are 70% more likely to be successfully targeted again by a 'Recovery' scam." },
]

export function FeatureGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="card rounded-3xl p-5 text-center">
          <div
            className="h-11 w-11 rounded-2xl grid place-items-center mx-auto"
            style={{
              background: "linear-gradient(135deg, rgba(110,199,47,0.22), rgba(38,100,49,0.12))",
              border: "1px solid rgba(110,199,47,0.28)",
            }}
          >
            <Icon size={20} />
          </div>
          <p className="mt-4 font-extrabold tracking-tight">{title}</p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  )
}
