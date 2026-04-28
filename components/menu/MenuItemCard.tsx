import Image from "next/image";
import type { MenuItem } from "@/lib/types";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-28 h-28 flex-shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          sizes="112px"
        />
      </div>

      <div className="flex-1 py-3.5 pr-4 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-semibold text-espresso-900 text-sm leading-snug">
            {item.name}
          </h3>
          {item.badge && (
            <span
              className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${
                item.badge === "Popular"
                  ? "bg-caramel-100 text-caramel-600"
                  : "bg-espresso-50 text-espresso-700"
              }`}
            >
              {item.badge}
            </span>
          )}
        </div>

        <p className="text-xs text-warm-gray-400 leading-relaxed mb-2.5 overflow-hidden"
           style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
          {item.description}
        </p>

        <p className="text-caramel-600 text-sm font-bold">
          ₦{item.priceNGN.toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
}
