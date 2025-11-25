import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-(--color-bg-secondary)">
      <div className="glass rounded-2xl p-12 text-center max-w-md">
        <h1 className="text-5xl font-bold text-(--color-primary) mb-3">404</h1>
        <h2 className="text-3xl font-bold text-(--color-text-primary) mb-3">Page Not Found</h2>
        <p className="text-(--color-text-secondary) mb-6">
          The page you're looking for doesn't exist or has been moved
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-(--color-primary) text-white rounded-lg hover:bg-(--color-primary-dark) font-semibold inline-block transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
