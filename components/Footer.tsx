import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso-950 text-cream-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-xl font-semibold mb-3">Brew & Co.</h3>
          <p className="text-sm text-cream-100/60 leading-relaxed">
            Crafted with intention.<br />Served with soul.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-caramel-400 mb-4">
            Visit Us
          </h4>
          <address className="not-italic text-sm text-cream-100/60 leading-relaxed">
            14 Admiralty Way<br />
            Lekki Phase 1<br />
            Lagos, Nigeria
          </address>
          <p className="text-sm text-cream-100/60 mt-4 leading-relaxed">
            Mon–Fri: 7am – 9pm<br />
            Sat–Sun: 8am – 10pm
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-caramel-400 mb-4">
            Follow Along
          </h4>
          <div className="flex gap-5 mb-5">
            <a href="#" aria-label="Instagram" className="text-sm text-cream-100/60 hover:text-caramel-400 transition-colors">
              Instagram
            </a>
            <a href="#" aria-label="Twitter" className="text-sm text-cream-100/60 hover:text-caramel-400 transition-colors">
              Twitter
            </a>
            <a href="#" aria-label="Facebook" className="text-sm text-cream-100/60 hover:text-caramel-400 transition-colors">
              Facebook
            </a>
          </div>
          <div className="flex gap-5">
            <Link href="/menu" className="text-sm text-cream-100/60 hover:text-caramel-400 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-sm text-cream-100/60 hover:text-caramel-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-espresso-900 text-center py-5 text-xs text-cream-100/30">
        © {new Date().getFullYear()} Brew & Co. All rights reserved.
      </div>
    </footer>
  );
}
