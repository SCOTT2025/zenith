"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-(--color-bg-secondary)">
      <div className="glass rounded-2xl p-12 text-center max-w-md">
        <div className="text-4xl mb-4">⚠️</div>
        <h1 className="text-3xl font-bold text-(--color-text-primary) mb-3">Something went wrong</h1>
        <p className="text-(--color-text-secondary) mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
