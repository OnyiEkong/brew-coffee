export type MenuBadge = "Popular" | "House Favorite" | ""

export interface MenuItem {
  category: string
  name: string
  priceNGN: number
  description: string
  badge: MenuBadge
  imageUrl: string
}

export interface EventEntry {
  name: string
  description: string
  time: string
  date: Date
  dayLabel: string
}
