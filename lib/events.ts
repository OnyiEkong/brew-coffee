import type { EventEntry } from "./types"

const EVENT_DEFINITIONS = [
  {
    name: "Open Mic Night",
    dayOfWeek: 5,
    time: "7:00 PM",
    description:
      "An evening of spoken word, original music, and impromptu performances in the warmth of the café. All are welcome — performer or audience.",
  },
  {
    name: "Coffee Tasting",
    dayOfWeek: 6,
    time: "10:00 AM",
    description:
      "Join our head barista Emeka for a guided tasting of our current single-origin selections. Learn to taste the difference between a washed Ethiopian and a natural Rwandan.",
  },
]

function getNextOccurrence(targetDay: number, weeksAhead: number = 0): Date {
  const now = new Date()
  const today = now.getDay()
  let daysUntil = (targetDay - today + 7) % 7
  if (daysUntil === 0 && now.getHours() >= 20) daysUntil = 7
  daysUntil += weeksAhead * 7
  const result = new Date(now)
  result.setDate(now.getDate() + daysUntil)
  result.setHours(0, 0, 0, 0)
  return result
}

export function getUpcomingEvents(count: number = 3): EventEntry[] {
  const events: EventEntry[] = []

  for (const def of EVENT_DEFINITIONS) {
    for (let week = 0; week < 2; week++) {
      const date = getNextOccurrence(def.dayOfWeek, week)
      events.push({
        name: def.name,
        description: def.description,
        time: def.time,
        date,
        dayLabel: date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
      })
    }
  }

  return events
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, count)
}
