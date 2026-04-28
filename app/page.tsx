import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import PopularItems from "@/components/home/PopularItems";
import EventsSection from "@/components/home/EventsSection";
import { getPopularItems } from "@/lib/menu-data";
import { getUpcomingEvents } from "@/lib/events";

export default function HomePage() {
  const popularItems = getPopularItems();
  const events = getUpcomingEvents(3);

  return (
    <>
      <HeroSection />
      <PopularItems items={popularItems} />
      <EventsSection events={events} />

      {/* CTA strip */}
      <section className="bg-caramel-100 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-caramel-600 text-xs font-semibold uppercase tracking-widest mb-3">
          Always Open. Always Warm.
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-espresso-900 mb-5 leading-tight">
          Come as you are.<br />Stay for the coffee.
        </h2>
        <p className="text-warm-gray-600 max-w-md mx-auto mb-9 text-sm leading-relaxed">
          Whether you need a quiet corner to work, a warm seat to catch up with a friend,
          or just the best flat white in Lagos — we have you.
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center bg-espresso-900 text-cream-50 text-sm font-semibold px-9 py-3.5 rounded-full hover:bg-espresso-800 transition-colors"
        >
          Browse the Full Menu
        </Link>
      </section>
    </>
  );
}
