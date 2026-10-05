"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenis = () => {
  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.2,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      
    });

    // Update ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Connect Lenis with GSAP ticker
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP from lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
};

export default useLenis;