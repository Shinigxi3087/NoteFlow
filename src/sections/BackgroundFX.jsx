import { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundFX() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => { await loadSlim(engine); })
      .then(() => setReady(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 30, density: { enable: true, area: 800 } },
      move: { enable: true, speed: 0.6, outModes: { default: "out" } },
      opacity: { value: 0.2 },
      size: { value: { min: 1, max: 2 } },
      links: { enable: true, opacity: 0.15, distance: 140, width: 1, color: "#9aa4ff" },
      color: { value: ["#7aa2ff", "#8bc5ff", "#c5b6ff"] },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,.25)_0%,rgba(0,0,0,0)_70%)]" />
      {ready && <Particles id="tsparticles" options={options} className="absolute inset-0" />}
      <div className="absolute inset-0 texture-noise mix-blend-soft-light opacity-40" />
    </div>
  );
}
