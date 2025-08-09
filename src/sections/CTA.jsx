import { motion } from "framer-motion";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-gradient-to-br from-indigo-900/20 to-blue-900/10 p-8 sm:p-10 text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold">Think better with NoteFlow</h3>
        <p className="mt-2 text-neutral-400">Never miss a note, idea or connection.</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Button>Start free trial</Button>
          <button className="btn-outline">Contact sales</button>
        </div>
      </motion.div>
    </section>
  );
}
