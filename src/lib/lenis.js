import Lenis from 'lenis';

let lenis;

export function initLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  return lenis;
}
