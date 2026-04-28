import type { EventEntry } from "@/lib/types";

interface Props {
  events: EventEntry[];
}

const eventConfig: Record<string, { icon: string; color: string }> = {
  "Open Mic Night": { icon: "🎤", color: "border-caramel-500" },
  "Coffee Tasting": { icon: "☕", color: "border-espresso-600" },
};

export default function EventsSection({ events }: Props) {
  return (
    <section className="bg-espresso-900 text-cream-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-caramel-400 text-xs font-semibold uppercase tracking-widest mb-2">
          Join the Community
        </p>
        <h2 className="font-display text-4xl font-semibold mb-12">
          Upcoming Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => {
            const config = eventConfig[event.name] ?? {
              icon: "🎶",
              color: "border-espresso-700",
            };
            return (
              <div
                key={i}
                className={`border ${config.color} rounded-2xl p-7 hover:bg-espresso-800/40 transition-colors`}
              >
                <div className="text-3xl mb-5">{config.icon}</div>
                <p className="text-caramel-400 text-xs font-semibold uppercase tracking-widest mb-1.5">
                  {event.dayLabel}
                </p>
                <h3 className="font-display text-xl font-semibold mb-1">
                  {event.name}
                </h3>
                <p className="text-caramel-300 text-sm font-medium mb-4">
                  {event.time}
                </p>
                <p className="text-cream-100/60 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
