const values = [
  {
    icon: "✦",
    title: "Quality Without Compromise",
    body: "We use single-origin beans sourced directly from farmers in Ethiopia, Rwanda, and Cameroon. Every espresso shot is pulled to a strict extraction standard. Every pastry is baked fresh by 7am. There are no shortcuts here because you deserve better than shortcuts.",
  },
  {
    icon: "◎",
    title: "Community First",
    body: "Brew & Co. exists because of the neighbourhood around it. Open Mic Nights on Fridays and Coffee Tastings on Saturdays were not marketing decisions — they were invitations. Our regulars know each other by name. That is the point.",
  },
  {
    icon: "❋",
    title: "Rooted in Culture",
    body: "We are a Lagos café. That means warmth, colour, conversation, and an unshakeable pride in where we come from. You will find Ankara-print cushions beside Italian espresso machines and Nigerian jazz beside a French pastry case. We hold all of it at once, unapologetically.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-espresso-950 text-cream-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-caramel-400 text-xs font-semibold uppercase tracking-widest mb-2">
          What We Stand For
        </p>
        <h2 className="font-display text-4xl font-semibold mb-12">Our Values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="border border-espresso-700 rounded-2xl p-8 hover:border-caramel-500 transition-colors"
            >
              <div className="text-caramel-400 text-2xl mb-5">{v.icon}</div>
              <h3 className="font-display text-xl font-semibold mb-4">{v.title}</h3>
              <p className="text-cream-100/60 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
