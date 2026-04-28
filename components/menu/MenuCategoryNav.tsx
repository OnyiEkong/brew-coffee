"use client";

import { useState, useEffect } from "react";

interface Props {
  categories: string[];
}

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "-");
}

export default function MenuCategoryNav({ categories }: Props) {
  const [active, setActive] = useState(categories[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((cat) => {
      const el = document.getElementById(slugify(cat));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(cat);
        },
        { rootMargin: "-10% 0px -75% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [categories]);

  function scrollTo(cat: string) {
    const el = document.getElementById(slugify(cat));
    if (el) {
      const offset = 96; // Navbar + mobile tab bar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  return (
    <>
      {/* Mobile: horizontal scrolling tab bar, pinned below navbar */}
      <div className="md:hidden sticky top-16 z-40 bg-cream-50 border-b border-cream-200 -mx-4 px-4">
        <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollTo(cat)}
              className={`whitespace-nowrap text-xs font-semibold px-4 py-1.5 rounded-full transition-colors flex-shrink-0 ${
                active === cat
                  ? "bg-espresso-900 text-cream-50"
                  : "text-warm-gray-600 hover:text-espresso-900 bg-cream-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: sticky sidebar */}
      <aside className="hidden md:block w-44 flex-shrink-0">
        <div className="sticky top-28 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-warm-gray-400 px-3 mb-4">
            Categories
          </p>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollTo(cat)}
              className={`block w-full text-left text-sm px-3 py-2.5 rounded-xl transition-colors ${
                active === cat
                  ? "bg-espresso-900 text-cream-50 font-semibold"
                  : "text-warm-gray-600 hover:text-espresso-900 hover:bg-cream-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
