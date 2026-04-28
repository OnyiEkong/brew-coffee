import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-espresso-900 tracking-tight"
        >
          Brew & Co.
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          <Link
            href="/"
            className="text-sm text-warm-gray-600 hover:text-espresso-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="text-sm text-warm-gray-600 hover:text-espresso-900 transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="text-sm text-warm-gray-600 hover:text-espresso-900 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
