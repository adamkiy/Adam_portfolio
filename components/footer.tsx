export function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="container py-12 text-sm opacity-70">
        <span className="inline-flex items-center gap-1">
          © {new Date().getFullYear()} Adam Kayal{" "}
          <span role="img" aria-label="Israel" className="leading-none">
            🇮🇱
          </span>
          . All rights reserved.
        </span>
      </div>
    </footer>
  )
}
