export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="w-full mt-16">
      <div
        style={{
          background: "var(--panel)",
          borderTop: "1px solid rgba(110, 199, 47, 0.20)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div className="container-pad py-8">
          <p className="text-sm text-center" style={{ color: "var(--muted)" }}>
            Copyright © {year} Levitate Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
