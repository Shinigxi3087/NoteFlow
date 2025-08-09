import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StaticIcon from "../components/StaticIcon";
gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: "speed",    title: "Built for speed",        text: "Instant sync across devices and offline-first UX." },
  { icon: "graph",    title: "Networked notes",        text: "Backlinks form a graph of ideas you can traverse." },
  { icon: "phone",    title: "iOS app",                text: "Capture ideas on the go—online or offline." },
  { icon: "lock",     title: "End‑to‑end encryption",  text: "Only you can access your notes." },
  { icon: "calendar", title: "Calendar integration",   text: "Keep track of meetings and agendas." },
  { icon: "publish",  title: "Publishing",             text: "Share anything you write with one click." },
  { icon: "clip",     title: "Instant capture",        text: "Save snippets from your browser and Kindle." },
  { icon: "search",   title: "Frictionless search",    text: "Recall past notes and ideas in milliseconds." },
];

export default function FeatureGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        opacity: 0, y: 16, duration: 0.6, ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
      });
      gsap.to(".bg-gradient-mesh", {
        yPercent: -8, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 0.5 }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section relative">

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Everything you need to think clearly</h2>
        <p className="mt-3 text-neutral-400">Fast. Private. Connected.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {features.map((f) => (
          <div key={f.title} className="feature-card card group transition-transform will-change-transform hover:-translate-y-1">
            <div className="mb-3">
              <StaticIcon name={f.icon} />
            </div>
            <h3 className="text-base sm:text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-neutral-400">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
