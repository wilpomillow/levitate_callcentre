export default function EnrolCancelPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container-pad text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Checkout cancelled
        </h1>

        <p className="mt-4 mx-auto max-w-md" style={{ color: "var(--muted)" }}>
          No charge was made. You can enrol whenever you’re ready.
        </p>

        <div className="mt-8 flex justify-center">
          <a href="/#enrol" className="btn btn-primary">
            Try again
          </a>
        </div>
      </div>
    </main>
  )
}