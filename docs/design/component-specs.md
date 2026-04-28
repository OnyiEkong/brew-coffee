# Brew Coffee — Component Specifications

Stack: Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript 5

All components are React Server Components by default.
Add `"use client"` only when you need `useState`, `useEffect`, or browser events.
Import images with `next/image`, navigation with `next/link`.

---

## Design Token Quick Reference

| Purpose          | Tailwind class(es)                        |
|------------------|-------------------------------------------|
| Primary text     | `text-espresso-800`                       |
| Secondary text   | `text-espresso-600`                       |
| Muted text       | `text-espresso-400`                       |
| Page background  | `bg-cream-50`                             |
| Card surface     | `bg-white`                                |
| Primary button   | `bg-espresso-800 text-white`              |
| Accent badge     | `bg-caramel-500 text-espresso-900`        |
| Signal / label   | `text-ember-500`                          |
| Border           | `border-espresso-200`                     |
| Display font     | `font-display` → Cormorant Garamond       |
| Body font        | `font-body` → DM Sans                    |

---

## 1. Button

```tsx
// components/ui/Button.tsx
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "caramel" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?:    ButtonSize;
}
```

### Variants

| Variant     | Background           | Text             | Use when                          |
|-------------|----------------------|------------------|-----------------------------------|
| `primary`   | `espresso-800`       | white            | Main CTA, "Order Now"             |
| `secondary` | transparent          | `espresso-800`   | Alternative action, "Learn More"  |
| `caramel`   | `caramel-500`        | `espresso-900`   | Highlighted promo, "Best Seller"  |
| `ghost`     | transparent          | `espresso-600`   | Low-emphasis, "View All"          |

### Sizes

| Size | Padding          | Font size |
|------|------------------|-----------|
| `sm` | `py-2 px-[18px]` | `text-sm` |
| `md` | `py-3 px-6`      | `text-sm` |
| `lg` | `py-4 px-9`      | `text-base` |

### Tailwind class blueprint

```tsx
const base = "inline-flex items-center gap-2 rounded-full font-body font-medium transition-all duration-base ease-smooth";

const variants = {
  primary:   "bg-espresso-800 text-white hover:bg-espresso-700 hover:-translate-y-px hover:shadow-lg",
  secondary: "border border-espresso-800 text-espresso-800 hover:bg-espresso-50 hover:-translate-y-px",
  caramel:   "bg-caramel-500 text-espresso-900 font-semibold hover:bg-caramel-700 hover:text-white hover:shadow-glow",
  ghost:     "text-espresso-600 hover:bg-cream-100 hover:text-espresso-800",
};

const sizes = {
  sm: "py-2 px-[18px] text-sm",
  md: "py-3 px-6 text-sm",
  lg: "py-4 px-9 text-base",
};
```

### Arrow CTA Button (reference image variant)

```tsx
// The pill button from the hero: "Order Now" with a white arrow circle
<button className="inline-flex items-center gap-0 pl-5 pr-1.5 py-1.5 rounded-full bg-espresso-800 text-white text-sm font-medium font-body">
  Order Now
  <span className="w-9 h-9 rounded-full bg-white text-espresso-800 flex items-center justify-center text-base ml-3 transition-transform duration-fast group-hover:rotate-45">
    ↗
  </span>
</button>
```

### Do / Don't

- **Do** use `primary` for the single most important action on a page.
- **Don't** place two `primary` buttons side by side — use `primary` + `secondary`.
- **Do** add `disabled` attribute and `opacity-40 pointer-events-none` for disabled state.
- **Don't** use `caramel` for destructive actions.

---

## 2. Badge / Tag

```tsx
interface BadgeProps {
  variant?: "espresso" | "caramel" | "ember" | "cream" | "burgundy";
  children: React.ReactNode;
}
```

### Variants

| Variant    | Background       | Text             | Use for                            |
|------------|------------------|------------------|------------------------------------|
| `espresso` | `espresso-800`   | `caramel-300`    | "Best Seller", primary labels      |
| `caramel`  | `caramel-500`    | `espresso-900`   | Featured, ratings, gold badges     |
| `ember`    | `ember-100`      | `ember-700`      | "Hot Pick", "Limited Time"         |
| `cream`    | `cream-200`      | `espresso-700`   | "New Arrival", neutral tags        |
| `burgundy` | `burgundy-700`   | white            | "Limited Edition", exclusive items |

### Tailwind class blueprint

```tsx
const base = "inline-flex items-center gap-1 px-[11px] py-1 rounded-full text-[10px] font-bold tracking-wider uppercase";
```

---

## 3. Input

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}
```

### Tailwind class blueprint

```tsx
// Wrapper (when icon present)
"relative inline-flex items-center"

// Icon
"absolute left-3.5 text-espresso-400 pointer-events-none text-sm"

// Input
"w-full font-body text-sm text-espresso-800 bg-white border border-espresso-200 rounded-full
 py-2.5 pr-4 pl-10  // with icon
 placeholder:text-espresso-400
 outline-none focus:border-espresso-600 focus:ring-2 focus:ring-espresso-600/10
 transition-[border-color,box-shadow] duration-fast"
```

### States

| State     | Border             | Ring                      |
|-----------|--------------------|---------------------------|
| Default   | `espresso-200`     | none                      |
| Focus     | `espresso-600`     | `ring-2 ring-espresso-600/10` |
| Error     | `ember-500`        | `ring-2 ring-ember-500/10` |
| Disabled  | `espresso-100`     | none · `opacity-50`       |

---

## 4. NavBar

```tsx
// Server Component — no "use client" needed
interface NavBarProps {
  activePath?: string;
}

interface NavLink {
  href:  string;
  label: string;
}

const links: NavLink[] = [
  { href: "/",         label: "Home"     },
  { href: "/products", label: "Products" },
  { href: "/facility", label: "Facility" },
  { href: "/reviews",  label: "Reviews"  },
];
```

### Structure

```
<header> bg-white shadow-md rounded-2xl px-7 py-3.5
  ├── Brand: font-display text-espresso-800 (logo + wordmark)
  ├── Links: flex gap-1
  │     └── each: rounded-full px-4 py-2 text-sm text-espresso-600
  │           active: underline underline-offset-[3px] font-medium text-espresso-800
  │           hover:  bg-cream-100 text-espresso-800
  └── Actions: flex gap-2 items-center
        ├── Icon buttons: w-9 h-9 rounded-full hover:bg-cream-100
        └── "Sign In": Button variant="primary" size="sm"
```

### Next.js implementation note

Use `next/link` for all nav links. Use `usePathname()` (client hook) to determine
the active path — this requires a thin `"use client"` wrapper component for the links.

---

## 5. ProductCard

```tsx
interface Product {
  id:          string;
  name:        string;
  description: string;
  price:       number;
  image:       string;   // path for next/image
  badge?:      { label: string; variant: BadgeProps["variant"] };
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
}
```

### Structure

```
<article> bg-white rounded-3xl overflow-hidden shadow-md
          hover:-translate-y-1.5 hover:shadow-xl transition-all duration-slow ease-spring
  ├── Image area: h-44 bg-cream-100 relative
  │     ├── <Image fill objectFit="contain" />
  │     └── Badge (absolute top-2.5 right-2.5)
  └── Body: p-5
        ├── Name:  font-display text-lg font-semibold text-espresso-800
        ├── Desc:  text-xs text-espresso-400 leading-relaxed mb-3.5
        └── Footer: flex justify-between items-center
              ├── Price: font-display text-xl font-bold text-espresso-800
              └── Add button: w-[34px] h-[34px] rounded-full bg-espresso-800 text-white
                             hover:bg-espresso-700 hover:scale-110 transition-all
```

### next/image usage (Next.js 16)

```tsx
import Image from "next/image";

<Image
  src={product.image}
  alt={product.name}
  fill
  sizes="(max-width: 640px) 100vw, 210px"
  className="object-contain p-4"
/>
```

---

## 6. Hero Section

```tsx
interface HeroProps {
  headline:    string;       // "Enjoy Your Morning Coffee"
  subheadline: string;       // "Boost your productivity..."
  ctaLabel:    string;       // "Order Now"
  ctaHref:     string;
  priceFrom?:  number;       // 7.99
  products:    HeroProduct[];
}

interface HeroProduct {
  image:    string;
  alt:      string;
  position: "left" | "center" | "right";
}
```

### Layout blueprint

```
<section> bg-cream-50 min-h-[640px]
  Grid: left half = product images, right half = copy + CTA
  ├── Product images: absolute/relative positioned, overlapping
  ├── Price badge: rounded-full bg-caramel-500 text-espresso-900
  │     font-display font-bold (floats over images)
  ├── Headline: font-display text-5xl/6xl font-semibold text-espresso-800
  │             leading-tight tracking-tight
  ├── Body copy: text-base text-espresso-600 max-w-sm leading-relaxed
  ├── CTA: Button variant="primary" (arrow variant)
  └── Stats: flex gap-10 (at bottom)
        └── StatCounter × 3
```

---

## 7. StatCounter

```tsx
interface StatCounterProps {
  value: string;   // "1K+", "3K+", "150+"
  label: string;   // "Reviews", "Best Sell", "Menu"
}
```

### Tailwind blueprint

```tsx
<div className="flex flex-col gap-1">
  <span className="font-display text-5xl font-bold text-espresso-800 leading-none tracking-tight">
    {value}
  </span>
  <span className="text-xs text-espresso-400 tracking-widest">
    {label}
  </span>
</div>
```

---

## 8. PriceBadge

Circular badge from the reference image — floats over the product group.

```tsx
interface PriceBadgeProps {
  label: string;  // "Start At"
  price: string;  // "$7.99"
}
```

```tsx
<div className="w-[88px] h-[88px] rounded-full bg-caramel-500 text-espresso-900
                flex flex-col items-center justify-center shadow-glow">
  <span className="text-[9px] font-semibold tracking-wider uppercase">{label}</span>
  <span className="font-display text-2xl font-bold leading-none">{price}</span>
</div>
```

---

## 9. Section Label / Eyebrow

Reusable "section tag" as seen on the reference — small label with a line before it.

```tsx
interface EyebrowProps {
  children: React.ReactNode;
}
```

```tsx
<p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-ember-500 mb-2.5">
  <span className="block w-5 h-px bg-ember-500 shrink-0" />
  {children}
</p>
```

---

## 10. Coffee Bean Decoration (SVG)

Decorative watermark beans, used as background patterns.

```tsx
// CoffeeBeanDecor.tsx — Server Component
export function CoffeeBeanDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="30" cy="20" rx="20" ry="12" stroke="currentColor" strokeWidth="2" />
      <path d="M 30 8 Q 36 20 30 32" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
```

Usage: `<CoffeeBeanDecor className="text-espresso-200 w-12 opacity-60" />`

---

## Accessibility Checklist

- All buttons have either visible text or `aria-label`
- `<Image>` components always have a meaningful `alt` attribute
- Color contrast meets WCAG AA: espresso-800 on cream-50 = 11.4:1 ✓
- Focus states use `ring-2` (never remove outline without a visible replacement)
- Interactive elements have `:focus-visible` styles via Tailwind `focus-visible:` prefix
- Use `<nav>` with `aria-label` for the NavBar; links are `<a>` (not buttons)
- Use `<article>` for ProductCard

---

## Font Loading (Next.js 16 App Router)

```tsx
// app/layout.tsx
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  // DM Sans uses optical sizing — no explicit weight needed
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

Then in `globals.css` (Tailwind v4):

```css
@import "tailwindcss";

@theme {
  --font-display: var(--font-display); /* maps to next/font variable */
  --font-body:    var(--font-body);
  /* paste remaining tokens from docs/design/tokens.css */
}
```
