import Image from "next/image";

const founders = [
  {
    name: "Adaeze Okonkwo",
    role: "Co-Founder & Head of Sourcing",
    imageUrl:
      "/images/founders/founder-3769021.webp",
    bio: "Adaeze discovered the third-wave coffee scene while studying in Edinburgh, spending her weekends in specialty cafés learning to taste the difference between a natural process and a washed one. Back in Lagos, she channels that knowledge into direct relationships with farmers in Ethiopia, Rwanda, and Cameroon — travelling twice yearly to source the beans behind every cup.",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Co-Founder & Head of Food",
    imageUrl:
      "/images/founders/founder-2379004.webp",
    bio: "Emeka fell in love with slow café mornings in Amsterdam, where he first understood that a well-made pastry is as serious a craft as a perfectly pulled espresso. He built Brew & Co.'s food programme from scratch, arriving before the sun to bake every morning. His croissants use European-style butter. His cinnamon rolls take twelve hours. He believes you will taste the difference.",
  },
];

export default function FoundersSection() {
  return (
    <section className="bg-cream-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-caramel-500 text-xs font-semibold uppercase tracking-widest mb-2">
          The People Behind the Cup
        </p>
        <h2 className="font-display text-4xl font-semibold text-espresso-900 mb-4">
          Meet Our Founders
        </h2>
        <p className="text-warm-gray-600 max-w-2xl mb-16 leading-relaxed text-sm">
          Best friends since secondary school in Surulere, Adaeze and Emeka opened Brew & Co.
          in 2019 with twelve seats, one espresso machine, and an unshakeable belief that Lagos
          deserved a coffee shop that held you still.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {founders.map((f) => (
            <div key={f.name}>
              <div className="relative h-80 rounded-2xl overflow-hidden mb-7">
                <Image
                  src={f.imageUrl}
                  alt={f.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-caramel-500 text-xs font-semibold uppercase tracking-widest mb-1.5">
                {f.role}
              </p>
              <h3 className="font-display text-2xl font-semibold text-espresso-900 mb-3">
                {f.name}
              </h3>
              <p className="text-warm-gray-600 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
