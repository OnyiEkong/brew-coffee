import Image from "next/image";
import FoundersSection from "@/components/about/FoundersSection";
import ValuesSection from "@/components/about/ValuesSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[420px] flex items-end">
        <Image
          src="/images/hero/hero-4350049.webp"
          alt="Two people sharing coffee and conversation at Brew and Co."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="text-caramel-400 text-xs font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-cream-50 leading-tight">
            Where Every Cup<br />Tells a Story
          </h1>
          <p className="text-cream-100/70 mt-3 text-base sm:text-lg">
            Born in Lagos. Brewed with love. Shared with the world.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-cream-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto space-y-6 text-warm-gray-600 text-sm leading-relaxed">
          <p>
            Adaeze and Emeka grew up in homes where the kettle was always on and the living room
            always full — where hospitality was not an act but a way of being. It was Adaeze&apos;s
            grandmother who first called coffee &ldquo;the drink that keeps strangers talking,&rdquo;
            and neither of them has forgotten it.
          </p>
          <p>
            After studying abroad — Adaeze in Edinburgh where she discovered the third-wave coffee
            scene, Emeka in Amsterdam where he fell in love with slow mornings and specialty roasts
            — they both returned home to Lagos and felt the absence of something they couldn&apos;t
            immediately name. The city had everything: energy, creativity, ambition. What it needed,
            they agreed over a late-night conversation at a roadside buka, was a place that held
            you still.
          </p>
          <p>
            Brew & Co. opened its doors in 2019 with twelve seats, one Rancilio espresso machine,
            and a handwritten menu. Today it is a neighbourhood institution. The seats have
            multiplied. The mission has not changed.
          </p>
        </div>
      </section>

      <FoundersSection />
      <ValuesSection />
    </>
  );
}
