"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Timeline.css"; // We'll define styles here

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const steps = timelineRef.current.querySelectorAll(".timeline-step");

    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",   
            end: "bottom 60%",   
            toggleActions: "play none none reverse",
            markers: true,
          },
          duration: 0.8,
          delay: index * 0.1, // slight stagger effect
        }
      );
    });
  }, []);

  return (
    <main>
        <section className="how-to orbitron-bold" ref={timelineRef}>
        <h1>How to Use SolanAI</h1>
        <p className="mt-4 text-lg">
            We provide the best tools and resources for Solana developers.
        </p>

        <div className="timeline">
            <div className="timeline-step">1. Input wallets that you want to track.</div>
            <div className="timeline-step">2. Choose Market Cap.</div>
            <div className="timeline-step">3. Configure other settings.</div>
            <div className="timeline-step">4. Choose risk level.</div>
            <div className="timeline-step">5. Choose notification preferences.</div>
        </div>
        </section>
    </main>
  );
}
