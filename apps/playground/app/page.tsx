export default function Page() {
  return (
    <main
      style={{
        fontFamily: 'system-ui, sans-serif',
        maxWidth: 640,
        margin: '80px auto',
        padding: '0 24px',
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>
        Next.js is running from source ✅
      </h1>
      <p style={{ color: '#666', lineHeight: 1.6 }}>
        This is the Next.js framework monorepo (vercel/next.js) running in
        development mode with Turbopack. The framework was compiled from source
        and this demo app uses the local build.
      </p>
    </main>
  )
}
