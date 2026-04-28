"use client";

import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const TIME_SLOTS = Array.from({ length: 25 }, (_, i) => {
  const totalMins = 8 * 60 + i * 30;
  const hour = Math.floor(totalMins / 60);
  const min = totalMins % 60 === 0 ? "00" : "30";
  const period = hour >= 12 ? "PM" : "AM";
  const h12 = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${h12}:${min} ${period}`;
});

export default function ReserveModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reserve-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso-950/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-cream-50 rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          aria-label="Close reservation form"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-warm-gray-400 hover:text-espresso-900 hover:bg-cream-100 transition-colors text-lg"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2
              id="reserve-title"
              className="font-display text-2xl font-semibold text-espresso-900 mb-1"
            >
              Reserve a Table
            </h2>
            <p className="text-sm text-warm-gray-600 mb-7">
              We&apos;ll hold it warm for you.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="reserve-name"
                  className="block text-sm font-medium text-espresso-800 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="reserve-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full border border-cream-200 rounded-xl px-4 py-2.5 text-sm text-espresso-900 bg-white placeholder-warm-gray-400 focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="reserve-party"
                  className="block text-sm font-medium text-espresso-800 mb-1.5"
                >
                  Party Size
                </label>
                <select
                  id="reserve-party"
                  required
                  defaultValue=""
                  className="w-full border border-cream-200 rounded-xl px-4 py-2.5 text-sm text-espresso-900 bg-white focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:border-transparent"
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "person" : "people"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="reserve-date"
                  className="block text-sm font-medium text-espresso-800 mb-1.5"
                >
                  Preferred Date
                </label>
                <input
                  id="reserve-date"
                  type="date"
                  required
                  min={today}
                  className="w-full border border-cream-200 rounded-xl px-4 py-2.5 text-sm text-espresso-900 bg-white focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="reserve-time"
                  className="block text-sm font-medium text-espresso-800 mb-1.5"
                >
                  Preferred Time
                </label>
                <select
                  id="reserve-time"
                  required
                  defaultValue=""
                  className="w-full border border-cream-200 rounded-xl px-4 py-2.5 text-sm text-espresso-900 bg-white focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:border-transparent"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-espresso-900 text-cream-50 rounded-xl py-3 text-sm font-semibold hover:bg-espresso-800 active:scale-95 transition-all mt-1"
              >
                Reserve My Table
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="text-5xl mb-5">☕</div>
            <h3 className="font-display text-2xl font-semibold text-espresso-900 mb-3">
              You&apos;re all set!
            </h3>
            <p className="text-sm text-warm-gray-600 leading-relaxed">
              Your table is being held with love.<br />
              See you soon!
            </p>
            <button
              onClick={onClose}
              className="mt-7 text-sm text-caramel-500 hover:text-caramel-600 underline underline-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
