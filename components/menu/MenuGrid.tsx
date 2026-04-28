import MenuItemCard from "./MenuItemCard";
import type { MenuItem } from "@/lib/types";

interface Props {
  groupedItems: Record<string, MenuItem[]>;
  categories: string[];
}

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-");
}

export default function MenuGrid({ groupedItems, categories }: Props) {
  return (
    <div className="flex-1 min-w-0 space-y-16">
      {categories.map((category) => (
        <section key={category} id={slugify(category)}>
          <h2 className="font-display text-2xl font-semibold text-espresso-900 mb-6 pb-4 border-b border-cream-200">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {groupedItems[category].map((item) => (
              <MenuItemCard key={item.name} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
