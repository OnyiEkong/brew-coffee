import Image from "next/image";
import type { MenuItem } from "@/lib/types";

interface Props {
  items: MenuItem[];
}

export default function PopularItems({ items }: Props) {
  return (
    <section className="bg-cream-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-caramel-500 text-xs font-semibold uppercase tracking-widest mb-2">
          Our Bestsellers
        </p>
        <h2 className="font-display text-4xl font-semibold text-espresso-900 mb-12">
          What Everyone&apos;s Ordering
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.slice(0, 8).map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-caramel-500 text-cream-50 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-espresso-900 text-sm mb-1 leading-snug">
                  {item.name}
                </h3>
                <p className="text-caramel-600 text-sm font-bold">
                  ₦{item.priceNGN.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
