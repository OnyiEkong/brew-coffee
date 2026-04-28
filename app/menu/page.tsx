import MenuGrid from "@/components/menu/MenuGrid";
import MenuCategoryNav from "@/components/menu/MenuCategoryNav";
import { getMenuByCategory, menuCategories } from "@/lib/menu-data";

export default function MenuPage() {
  const grouped = getMenuByCategory();

  return (
    <div className="bg-cream-50 min-h-screen">
      {/* Page header */}
      <div className="bg-espresso-900 text-cream-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-caramel-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Brew & Co.
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold mb-3">
            Our Menu
          </h1>
          <p className="text-cream-100/60 max-w-md text-sm leading-relaxed">
            Everything is made fresh. The coffee is sourced directly. The welcome is always warm.
          </p>
        </div>
      </div>

      {/* Menu body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          <MenuCategoryNav categories={menuCategories} />
          <MenuGrid groupedItems={grouped} categories={menuCategories} />
        </div>
      </div>
    </div>
  );
}
