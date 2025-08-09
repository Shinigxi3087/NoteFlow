import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Button from "./Button";
import logo from "../assets/logo.png"; // your high-res PNG

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setCompact(v > 12));

  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-neutral-800/70 bg-black/40 backdrop-blur"
      animate={{ y: 0 }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          className="flex items-center justify-between"
          initial={false}
          animate={{
            paddingTop: compact ? 6 : 10,
            paddingBottom: compact ? 6 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Logo container fixes navbar height */}
          <div className="flex items-center gap-2 h-10 w-100 overflow-hidden">
            <img
            src={logo}
            alt="NoteFlow"
            className="w-auto"
            style={{
              height: "200%", // bigger than container height
              transform: "scale(1.5)", // adjust until you like the size
            }}
            />
          </div>

          {/* Right: actions */}
          <div className="hidden md:flex items-center gap-2">
            <button className="btn-outline px-3 py-1.5 text-sm">Login</button>
            <Button className="px-3 py-1.5 text-sm">Start free trial</Button>
          </div>
        </motion.nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="md:hidden mt-2 rounded-xl border border-neutral-800 bg-black/60 p-3"
            >
              <div className="grid gap-2">
                <button className="btn-outline w-full px-3 py-1.5 text-sm">Login</button>
                <Button className="w-full px-3 py-1.5 text-sm">Start free trial</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
