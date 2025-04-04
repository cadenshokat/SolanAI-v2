"use client";
import Image from "next/image";
import {Header} from "./components/Header";
import React, { useEffect } from "react";
import "./page.css";
import { ScrollContainer, ScrollPage, Animator, MoveOut, Sticky, Fade, batch, Move } from "react-scroll-motion"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./components/Button";
import { LinearGradient } from "react-text-gradients"; 



gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: true,
        });
    });

    {/*gsap.timeline({
      scrollTrigger: {
        trigger: panels[2], // assumes third panel holds the timeline steps
        start: "top top",               // when the third panel hits the top of the viewport
        end: "bottom top",
        scrub: true,
        markers: true,
      }
    })
    .fromTo(
      ".timeline-step",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3 }
    );*/}
  
}, []);

  return (
    <main>
      < Header />
      <section className="panel" style={{ }}>
         
        <div className="page">
          <h1 className="title orbitron-bold">Welcome to SolanAI</h1>
          <p className="mt-4 text-lg">Your one-stop solution for all things Solana.</p>
        </div>

        
      </section>

      <section className="panel" style={{ height: "100vh" }}>
        <div className="info orbitron-bold">
          <div className="info-container">
            <div className="info-left">
              <h1>Why SolanAI?</h1>
              <p className="arial-bold">
                SolanAI is your AI-powered trading assistant engineered specifically for the fast-moving Solana market. Leveraging cutting-edge machine learning and real-time blockchain analytics, our platform transforms raw data into actionable insights.
              </p>
              <p className="arial-bold key-title">
                <strong><LinearGradient gradient={['to left', '#00FFA3 ,#DC1FFF']}>Key Features Include:</LinearGradient></strong>
              </p>
            </div>
            <div className="info-right">
              <div className="feature-box">
                <h2><span className="gradient-text">Real-Time Trade Signals</span></h2>
                <p>Instant alerts and predictive analytics pinpoint optimal entry and exit points.</p>
              </div>
              <div className="feature-box">
                <h2><span className="gradient-text">Adaptive Chatbot Assistance</span></h2>
                <p>Interact with a dynamic AI chatbot offering personalized trading advice.</p>
              </div>
              <div className="feature-box">
                <h2><span className="gradient-text">Dynamic Data Visualizations</span></h2>
                <p>Experience sleek, interactive dashboards with vibrant Solana color accents.</p>
              </div>
              <div className="feature-box">
                <h2><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>Holistic Market Insights</LinearGradient></h2>
                <p>Combine on-chain activity with social sentiment for a comprehensive market overview.</p>
              </div>
            </div>
          </div>
          <Button />
        </div>
      </section>



      <section className="panel" style={{ height: "100vh"}}>
        <div className="how-to orbitron-bold">
          <h1>How to use SolanAI</h1>
          <p className="mt-4 text-lg">We provide the best tools and resources for Solana developers.</p>
          </div>

          <div className="timeline">
            {/*<section className="timeline-step">First Step</section>
            <section className="timeline-step">Second Step</section>
            <section className="timeline-step">Third Step</section> */}
            <div  className="timeline-step">First Step</div>
            <div className="timeline-step">Second Step</div>
            <div className="timeline-step">Third Step</div>
            <div className="timeline-step">Fourth Step</div>
          </div>
      </section>

      <section className="panel" style={{ height: "100vh"}}>

        <div className="info orbitron-bold">
          Holistic
        </div>

      </section>


    </main>
       
  );
}