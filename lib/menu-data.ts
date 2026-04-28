import type { MenuItem } from "./types"

const categoryImages: Record<string, string[]> = {
  "Espresso Drinks": [
    "/images/menu/menu-312418.webp",
    "/images/menu/menu-585753.webp",
    "/images/menu/menu-302901.webp",
  ],
  "Cold Drinks": [
    "/images/menu/menu-1193335.webp",
    "/images/menu/menu-2615323.webp",
    "/images/menu/menu-10574974.webp",
  ],
  Pastries: [
    "/images/menu/menu-4828339.webp",
    "/images/menu/menu-205961.webp",
    "/images/menu/menu-1092730.webp",
  ],
  Sandwiches: [
    "/images/menu/menu-1647163.webp",
    "/images/menu/menu-3769335.webp",
    "/images/menu/menu-2955819.webp",
  ],
}

type RawItem = Omit<MenuItem, "imageUrl">

const rawItems: RawItem[] = [
  // ── Espresso Drinks ────────────────────────────────────────────────────────
  {
    category: "Espresso Drinks",
    name: "Espresso",
    priceNGN: 5500,
    description: "A rich double shot of our signature dark roast blend with a golden crema",
    badge: "House Favorite",
  },
  {
    category: "Espresso Drinks",
    name: "Americano",
    priceNGN: 6000,
    description: "Two shots of espresso topped with hot water for a smooth and bold cup",
    badge: "",
  },
  {
    category: "Espresso Drinks",
    name: "Cappuccino",
    priceNGN: 7500,
    description: "Equal parts espresso, steamed milk, and velvety foam for a classic Italian experience",
    badge: "Popular",
  },
  {
    category: "Espresso Drinks",
    name: "Latte",
    priceNGN: 8000,
    description: "Two shots of espresso with silky steamed milk and a thin layer of microfoam",
    badge: "Popular",
  },
  {
    category: "Espresso Drinks",
    name: "Flat White",
    priceNGN: 8000,
    description: "Ristretto shots with velvety microfoam poured over whole milk — strong and smooth",
    badge: "House Favorite",
  },
  {
    category: "Espresso Drinks",
    name: "Cortado",
    priceNGN: 7000,
    description: "Equal parts espresso and warm milk to reduce the acidity without overwhelming the coffee",
    badge: "",
  },
  {
    category: "Espresso Drinks",
    name: "Macchiato",
    priceNGN: 6500,
    description: "A shot of espresso lightly marked with a dollop of fresh foam",
    badge: "",
  },
  {
    category: "Espresso Drinks",
    name: "Mocha",
    priceNGN: 9000,
    description: "Two shots of espresso blended with rich dark chocolate sauce and steamed milk",
    badge: "Popular",
  },
  {
    category: "Espresso Drinks",
    name: "Caramel Latte",
    priceNGN: 9000,
    description: "Our classic latte sweetened with house-made salted caramel syrup",
    badge: "Popular",
  },
  {
    category: "Espresso Drinks",
    name: "Vanilla Latte",
    priceNGN: 8500,
    description: "Smooth espresso and steamed milk with a touch of pure vanilla bean syrup",
    badge: "",
  },
  {
    category: "Espresso Drinks",
    name: "Lavender Latte",
    priceNGN: 9000,
    description: "Two shots of espresso with house-made lavender syrup and oat milk foam",
    badge: "House Favorite",
  },
  {
    category: "Espresso Drinks",
    name: "Hazelnut Mocha",
    priceNGN: 9500,
    description: "Espresso with dark chocolate and toasted hazelnut syrup topped with whipped cream",
    badge: "",
  },
  {
    category: "Espresso Drinks",
    name: "Brown Sugar Oat Latte",
    priceNGN: 9000,
    description: "Espresso shaken with brown sugar cinnamon syrup and poured over oat milk",
    badge: "Popular",
  },

  // ── Cold Drinks ────────────────────────────────────────────────────────────
  {
    category: "Cold Drinks",
    name: "Cold Brew",
    priceNGN: 7500,
    description: "Steeped for 20 hours in cold water for a smooth, low-acid concentrate served over ice",
    badge: "Popular",
  },
  {
    category: "Cold Drinks",
    name: "Nitro Cold Brew",
    priceNGN: 8500,
    description: "Cold brew infused with nitrogen for a creamy cascading pour with a velvety finish",
    badge: "House Favorite",
  },
  {
    category: "Cold Drinks",
    name: "Iced Americano",
    priceNGN: 7000,
    description: "Double espresso poured over ice and topped with cold water",
    badge: "",
  },
  {
    category: "Cold Drinks",
    name: "Iced Latte",
    priceNGN: 8500,
    description: "Espresso chilled over ice and topped with cold milk of your choice",
    badge: "Popular",
  },
  {
    category: "Cold Drinks",
    name: "Iced Mocha",
    priceNGN: 9500,
    description: "Espresso with chocolate sauce shaken over ice and topped with cold milk",
    badge: "",
  },
  {
    category: "Cold Drinks",
    name: "Iced Caramel Macchiato",
    priceNGN: 9500,
    description: "Vanilla syrup and cold milk layered with espresso and a drizzle of caramel",
    badge: "Popular",
  },
  {
    category: "Cold Drinks",
    name: "Sparkling Lemonade",
    priceNGN: 6000,
    description: "Fresh-squeezed lemon juice with cane sugar and sparkling water",
    badge: "",
  },
  {
    category: "Cold Drinks",
    name: "Strawberry Matcha Latte",
    priceNGN: 9500,
    description: "Ceremonial grade matcha with oat milk and a house-made strawberry compote",
    badge: "House Favorite",
  },
  {
    category: "Cold Drinks",
    name: "Mango Passion Refresher",
    priceNGN: 8000,
    description: "Tropical mango and passion fruit blend with green coffee extract over ice",
    badge: "Popular",
  },
  {
    category: "Cold Drinks",
    name: "Classic Iced Tea",
    priceNGN: 5500,
    description: "House-brewed black tea served over ice — sweetened or unsweetened",
    badge: "",
  },
  {
    category: "Cold Drinks",
    name: "Peach Iced Tea",
    priceNGN: 6500,
    description: "House black tea infused with ripe peach syrup served over ice",
    badge: "",
  },
  {
    category: "Cold Drinks",
    name: "Horchata Cold Brew",
    priceNGN: 9500,
    description: "Cold brew layered over house-made cinnamon rice milk and vanilla",
    badge: "House Favorite",
  },

  // ── Pastries ───────────────────────────────────────────────────────────────
  {
    category: "Pastries",
    name: "Butter Croissant",
    priceNGN: 6000,
    description: "Flaky golden croissant made with European-style butter — baked fresh each morning",
    badge: "Popular",
  },
  {
    category: "Pastries",
    name: "Almond Croissant",
    priceNGN: 7000,
    description: "Twice-baked croissant filled with almond cream and topped with toasted sliced almonds",
    badge: "House Favorite",
  },
  {
    category: "Pastries",
    name: "Chocolate Croissant",
    priceNGN: 6500,
    description: "Buttery laminated pastry wrapped around dark Belgian chocolate batons",
    badge: "Popular",
  },
  {
    category: "Pastries",
    name: "Blueberry Scone",
    priceNGN: 6000,
    description: "Tender buttermilk scone loaded with fresh blueberries and a lemon glaze",
    badge: "",
  },
  {
    category: "Pastries",
    name: "Cinnamon Roll",
    priceNGN: 8000,
    description: "Soft pillowy roll swirled with cinnamon brown sugar and topped with cream cheese icing",
    badge: "Popular",
  },
  {
    category: "Pastries",
    name: "Banana Bread",
    priceNGN: 5500,
    description: "Moist loaf made with overripe bananas, walnuts, and a hint of cinnamon",
    badge: "House Favorite",
  },
  {
    category: "Pastries",
    name: "Lemon Poppy Seed Muffin",
    priceNGN: 5500,
    description: "Bright zesty muffin with fresh lemon zest and a crunchy poppy seed crumble top",
    badge: "",
  },
  {
    category: "Pastries",
    name: "Morning Glory Muffin",
    priceNGN: 6000,
    description: "Hearty muffin packed with carrots, apple, coconut, and warm spices",
    badge: "",
  },
  {
    category: "Pastries",
    name: "Chocolate Chip Cookie",
    priceNGN: 5000,
    description: "Thick bakery-style cookie with semi-sweet and dark chocolate chips baked to order",
    badge: "Popular",
  },
  {
    category: "Pastries",
    name: "Cardamom Kouign-Amann",
    priceNGN: 7500,
    description: "Caramelized laminated pastry with cardamom sugar — crispy outside and buttery inside",
    badge: "House Favorite",
  },
  {
    category: "Pastries",
    name: "Seasonal Fruit Tart",
    priceNGN: 8500,
    description: "Buttery tart shell filled with vanilla pastry cream and topped with fresh seasonal fruit",
    badge: "",
  },

  // ── Sandwiches ─────────────────────────────────────────────────────────────
  {
    category: "Sandwiches",
    name: "Avocado Toast",
    priceNGN: 14500,
    description: "Smashed avocado on sourdough with everything bagel seasoning and a drizzle of olive oil",
    badge: "Popular",
  },
  {
    category: "Sandwiches",
    name: "Egg & Cheese Sandwich",
    priceNGN: 12500,
    description: "Fluffy scrambled egg and aged cheddar on a toasted English muffin",
    badge: "Popular",
  },
  {
    category: "Sandwiches",
    name: "BLT Club",
    priceNGN: 16500,
    description: "Crispy bacon, lettuce, and tomato with herb aioli on toasted sourdough",
    badge: "",
  },
  {
    category: "Sandwiches",
    name: "Turkey Pesto Panini",
    priceNGN: 17000,
    description: "Sliced turkey breast with sun-dried tomato pesto, arugula, and fresh mozzarella pressed hot",
    badge: "House Favorite",
  },
  {
    category: "Sandwiches",
    name: "Caprese Sandwich",
    priceNGN: 15500,
    description: "Fresh mozzarella, ripe tomato, basil, and balsamic glaze on a ciabatta roll",
    badge: "",
  },
  {
    category: "Sandwiches",
    name: "Smoked Salmon Bagel",
    priceNGN: 18500,
    description: "House cream cheese, smoked salmon, capers, red onion, and dill on a toasted everything bagel",
    badge: "House Favorite",
  },
  {
    category: "Sandwiches",
    name: "Grilled Veggie Wrap",
    priceNGN: 16500,
    description: "Roasted zucchini, bell pepper, red onion, and hummus in a whole wheat spinach wrap",
    badge: "",
  },
  {
    category: "Sandwiches",
    name: "Chicken Caesar Wrap",
    priceNGN: 18000,
    description: "Grilled chicken, romaine hearts, shaved parmesan, and caesar dressing in a toasted flour wrap",
    badge: "Popular",
  },
  {
    category: "Sandwiches",
    name: "Ham & Gruyère Croissant",
    priceNGN: 15500,
    description: "Smoked ham and melted gruyère on a toasted butter croissant with whole grain mustard",
    badge: "Popular",
  },
  {
    category: "Sandwiches",
    name: "Mushroom & Brie Panini",
    priceNGN: 17000,
    description: "Sautéed wild mushrooms with brie, fig jam, and baby arugula pressed on sourdough",
    badge: "House Favorite",
  },
]

const categoryIndices: Record<string, number> = {}

export const menuData: MenuItem[] = rawItems.map((item) => {
  const pool = categoryImages[item.category]
  const idx = categoryIndices[item.category] ?? 0
  categoryIndices[item.category] = idx + 1
  return { ...item, imageUrl: pool[idx % pool.length] }
})

export const menuCategories = [...new Set(menuData.map((i) => i.category))]

export function getMenuByCategory(): Record<string, MenuItem[]> {
  return menuCategories.reduce<Record<string, MenuItem[]>>((acc, cat) => {
    acc[cat] = menuData.filter((i) => i.category === cat)
    return acc
  }, {})
}

export function getPopularItems(): MenuItem[] {
  return menuData.filter((i) => i.badge === "Popular")
}
