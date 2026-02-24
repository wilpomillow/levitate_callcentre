export default function EnrolSuccessPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="container-pad text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          You’re enrolled
        </h1>

        <p className="mt-4 mx-auto max-w-md" style={{ color: "var(--muted)" }}>
          Payment confirmed. You’re officially part of Levitate.
          Keep an eye on your inbox for next steps.
        </p>

        <div className="mt-8 flex justify-center">
          <a href="/" className="btn btn-primary">
            Back to home
          </a>
        </div>
      </div>
    </main>
  )
}