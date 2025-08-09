import { motion } from "framer-motion";

const people = [
  {
    name: "Sean Rose",
    handle: "@seanrose",
    role: "Product Lead",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Just the right amount of simple/fast for a personal note app.",
  },
  {
    name: "Ryan Delk",
    handle: "@delk",
    role: "Founder",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
    quote: "NoteFlow is magic.",
  },
  {
    name: "Demetria Giles",
    handle: "@drosewritings",
    role: "Writer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "A knowledge worker’s dream come true.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Loved by thinkers</h2>
        <p className="mt-2 text-neutral-400">Here’s what people are saying</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative card overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_80px_rgba(79,70,229,.35)]"
          >
            {/* glow halo (shows on hover) */}
            <div className="halo pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(120px_80px_at_20%_-20%,rgba(99,102,241,0.45),transparent),radial-gradient(140px_100px_at_120%_120%,rgba(34,211,238,0.35),transparent)]" />
            </div>

            {/* content */}
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={p.img}
                  alt={`${p.name} headshot`}
                  className="h-10 w-10 rounded-full ring-1 ring-neutral-700 object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-medium leading-tight">{p.name}</div>
                  <div className="text-xs text-neutral-400">
                    {p.handle} · {p.role}
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-300">“{p.quote}”</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
