import React from "react";
import BackgroundFX from "./sections/BackgroundFX.jsx";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import LogosMarquee from "./sections/LogosMarquee.jsx";
import FeatureGrid from "./sections/FeatureGrid.jsx";
import AISection from "./sections/AISection.jsx";
import Pricing from "./sections/Pricing.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import CTA from "./sections/CTA.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <LogosMarquee />
        <FeatureGrid />
        <AISection />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
