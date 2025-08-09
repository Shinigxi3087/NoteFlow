import { motion } from "framer-motion";
import Button from "./Button";
import ThreeHero from "../components/ThreeHero";

export default function Hero() {
  return (
    <section className="section pt-16 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="mb-3 text-xs sm:text-sm uppercase tracking-widest text-neutral-400 text-center"
      >
        Take notes using AI
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }} viewport={{ once: true }}
        className="mx-auto max-w-5xl text-balance text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
      >
        Think better with <span className="gradient-text">NoteFlow</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
        className="mx-auto mt-4 max-w-2xl text-center text-base sm:text-lg text-neutral-400"
      >
        Networked notes, lightning‑fast search, and a built‑in AI thought partner.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }} viewport={{ once: true }}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
      >
        <Button className="w-full sm:w-auto">Start 14‑day free trial</Button>
        <button className="btn-outline w-full sm:w-auto">See how it works</button>
      </motion.div>

      {/* 3D visual */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}
        className="mt-10 sm:mt-12 grid items-center gap-8 md:grid-cols-2"
      >
        <div className="order-2 md:order-1">
          <ThreeHero />
        </div>

        <div className="order-1 md:order-2">
          <ul className="space-y-3 text-sm text-neutral-300">
            {["Transcribe voice notes", "Generate outlines", "Extract action items", "Save custom prompts"].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.05 * i }} viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_30px_2px_rgba(79,70,229,.5)]" />
                {t}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
