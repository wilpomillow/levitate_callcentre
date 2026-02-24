export function GlowDivider() {
  return (
    <div aria-hidden="true" className="w-full">
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(110,199,47,0.35) 20%, rgba(110,199,47,0.20) 50%, rgba(38,100,49,0.25) 80%, transparent 100%)",
        }}
      />
    </div>
  )
}
