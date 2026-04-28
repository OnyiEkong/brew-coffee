import Image from "next/image";
import Link from "next/link";
import ReserveButton from "@/components/ReserveButton";

export default function HeroSection() {
  return (
    <section className="relative h-[88vh] min-h-[560px] flex items-center">
      <Image
        src="/images/hero/hero-2159065.webp"
        alt="Warm café interior with wooden furniture and golden lighting at Brew and Co."
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Layered gradient: left-weighted on desktop, bottom-weighted on mobile */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/40 to-transparent md:bg-gradient-to-r md:from-espresso-950/85 md:via-espresso-950/50 md:to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-caramel-400 text-xs font-semibold uppercase tracking-widest mb-4">
          Lekki Phase 1, Lagos
        </p>
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold text-cream-50 leading-tight max-w-2xl mb-5">
          Crafted with Intention.<br />Served with Soul.
        </h1>
        <p className="text-cream-100/80 text-base sm:text-lg max-w-md mb-9 leading-relaxed">
          Specialty coffee, fresh pastries, and light lunches in the heart of Lagos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center bg-caramel-500 text-cream-50 text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-caramel-600 transition-colors"
          >
            Explore Our Menu
          </Link>
          <ReserveButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
