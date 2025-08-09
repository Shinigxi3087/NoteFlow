import { motion } from "framer-motion";
import Button from "./Button";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-400">One plan, one price</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">We like keeping things simple</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="mx-auto mt-10 max-w-md"
      >
        <div className="card p-8 text-center">
          <div className="text-5xl font-bold">$10<span className="text-lg text-neutral-400">/mo</span></div>
          <p className="mt-2 text-sm text-neutral-400">(billed annually)</p>
          <ul className="mt-6 space-y-2 text-sm text-left text-neutral-400">
            <li>• Networked note‑taking</li>
            <li>• Web clipper</li>
            <li>• Kindle highlights sync</li>
            <li>• End‑to‑end encryption</li>
            <li>• iOS app</li>
          </ul>
          <Button className="mt-6 w-full">Start your 14‑day trial</Button>
        </div>
      </motion.div>
    </section>
  );
}
