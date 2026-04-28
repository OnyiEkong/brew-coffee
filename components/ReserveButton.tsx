"use client";

import { useState } from "react";
import ReserveModal from "./ReserveModal";

interface Props {
  variant?: "dark" | "outline";
}

export default function ReserveButton({ variant = "dark" }: Props) {
  const [open, setOpen] = useState(false);

  const className =
    variant === "outline"
      ? "inline-flex items-center justify-center text-sm font-semibold px-6 py-3 rounded-full border-2 border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-espresso-900 transition-colors"
      : "inline-flex items-center justify-center text-sm font-semibold px-6 py-2.5 rounded-full bg-espresso-900 text-cream-50 hover:bg-espresso-800 transition-colors";

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        Reserve a Table
      </button>
      <ReserveModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
