import { motion } from "framer-motion";
import Button from "./Button";

function ChatPreview() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-2xl border border-neutral-800/80 bg-gradient-to-br from-indigo-950/50 to-slate-900/30 shadow-[0_0_60px_-20px_rgba(79,70,229,.5)]">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_0%,rgba(99,102,241,.25),transparent)]" />

      {/* header tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-800/70 px-4 py-2.5">
        {["Write", "Summarize", "Outline"].map((t, i) => (
          <button
            key={t}
            className={`rounded-md px-3 py-1.5 text-xs ${
              i === 0
                ? "bg-indigo-600 text-white"
                : "text-neutral-300 hover:bg-white/5"
            }`}
          >
            {t}
          </button>
        ))}
        <div className="ml-auto text-[10px] text-neutral-400">Model: NoteFlow AI</div>
      </div>

      {/* messages */}
      <div className="chat-scroll flex h-[calc(100%-116px)] flex-col gap-3 overflow-y-auto px-4 py-3">
        {/* assistant bubble */}
        <div className="flex items-start gap-2">
          <div className="grid place-items-center h-7 w-7 rounded-full bg-indigo-600/80 text-white text-xs">🧠</div>
          <div className="max-w-[80%] rounded-lg border border-indigo-500/20 bg-indigo-500/10 p-3 text-sm text-neutral-200">
            I can help you rewrite and tighten your meeting notes. Want a short summary
            or bullet points with action items?
          </div>
        </div>

        {/* user bubble */}
        <div className="ml-auto flex max-w-[80%] items-start gap-2">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-3 text-sm text-neutral-100">
            Summarize the notes into 5 bullets and extract tasks with owners.
          </div>
          <div className="grid place-items-center h-7 w-7 rounded-full bg-neutral-700 text-white text-xs">🙂</div>
        </div>

        {/* assistant typing */}
        <div className="flex items-start gap-2">
          <div className="grid place-items-center h-7 w-7 rounded-full bg-indigo-600/80 text-white text-xs">🧠</div>
          <div className="flex items-center gap-1 rounded-lg border border-indigo-500/20 bg-indigo-500/10 px-3 py-2">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-300" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-300 [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-300 [animation-delay:240ms]" />
          </div>
        </div>
      </div>

      {/* input + chips */}
      <div className="border-t border-neutral-800/70 p-3">
        <div className="mb-2 flex flex-wrap gap-2">
          {["Rewrite clearer", "Shorter summary", "Action items"].map((s) => (
            <button
              key={s}
              className="rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-neutral-300 hover:bg-neutral-800"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            placeholder="Ask NoteFlow AI…"
            className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-600/40"
          />
          <button className="btn-outline px-3 py-2 text-sm">Insert</button>
          <button className="btn-outline px-3 py-2 text-sm">Replace</button>
          <Button className="px-3 py-2 text-sm">Run</Button>
        </div>
      </div>
    </div>
  );
}

export default function AISection() {
  return (
    <section id="ai" className="section">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm uppercase tracking-widest text-neutral-400">
            Reflect‑style AI
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Notes with an AI assistant
          </h2>
          <p className="mt-4 text-neutral-400">
            Use AI to improve writing, organize thoughts, summarize meetings, and
            chat with your notes.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-300">
            {[
              "Transcribe voice notes with high accuracy",
              "Generate outlines from scattered thoughts",
              "Extract action items from meetings",
              "Save custom prompts for workflows",
            ].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.05 * i }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-indigo-500" /> {t}
              </motion.li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <span className="kbd">⌘</span>
            <span className="kbd">↩</span>
            <span className="text-xs text-neutral-400"> to run prompts</span>
          </div>
          <div className="mt-6">
            <Button>Try AI now</Button>
          </div>
        </motion.div>

        {/* ⤵️ prettier right panel */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <ChatPreview />
        </motion.div>
      </div>
    </section>
  );
}
