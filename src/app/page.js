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
import { BubbleNumber } from "./components/BubbleNumber";
import { IoWalletOutline } from "react-icons/io5";
import GradientText from './components/GradientText.js';
import ShinyText from './effects/ShinyText';
import { FaTwitter } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import Threads from './effects/Threads';


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline",    // use the timeline container as trigger
        start: "top top",        // animation starts when the timeline container's top reaches 75% of the viewport
        scrub: true,             // ties the animation progress to the scrollbar
        markers: false,           // enable markers for debugging
        end: "+=3000",    
      }
    });

    // Hard code the animation for each timeline step sequentially.
    tl.fromTo(
      ".timeline-step:nth-child(1)",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    // Fade out the first step after a slight delay
    .to(
      ".timeline-step:nth-child(1)",
      { opacity: 0, y: -50, duration: 1 },
      "+=1"
    )
    .fromTo(
      ".timeline-step:nth-child(2)",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .to(
      ".timeline-step:nth-child(2)",
      { opacity: 0, y: -50, duration: 1 },
      "+=1"
    )
    .fromTo(
      ".timeline-step:nth-child(3)",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .to(
      ".timeline-step:nth-child(3)",
      { opacity: 0, y: -50, duration: 1 },
      "+=1"
    )
    .fromTo(
      ".timeline-step:nth-child(4)",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .to(
      ".timeline-step:nth-child(4)",
      { opacity: 0, y: -50, duration: 1 },
      "+=1"
    );
  }, []);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false,
            markers: false,
        });
    });

  }, []);

  return (
    <main>
      < Header />
      

{/* Background section with Threads and overlayed title */}
<section className="panel" style={{ height: "100vh", position: "relative" }}>
  <Threads
    amplitude={.5}
    distance={0}
    enableMouseInteraction={false}
    className="threads-container"
  />
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      textAlign: "center",
      color: "white",
    }}
  >
    <h1 className="title orbitron-bold">
      <GradientText
        colors={["#00FFA3", "#03E1FF", "#DC1FFF", "#8d70de", "#40ffaa"]}
        animationSpeed={8}
        showBorder={false}
        className="custom-class"
      >
        SolanAI
      </GradientText>
    </h1>
    <p className="mt-4 text-lg">Your one-stop solution for all things Solana.</p>
  </div>
</section>

      <section className="panel" style={{ height: "100vh" }}>
        <div className="info orbitron-bold">
          <div className="info-container">
              <p className="key-title arial-bold">
                <strong><LinearGradient gradient={['to left', '#00FFA3 ,#DC1FFF']}>SOLANAI FEATURES</LinearGradient></strong>
              </p>
            <h1 className="why-solanai"><ShinyText text="Where On-Chain Meets Off-Chain" disabled={false} speed={3} className='custom-class' />
            </h1>
          </div>

        
  <div className="card-container">
    {/* Header Row */}
    <div className="header-section">
      <div className="card-header orbitron-bold">
        <div>
        <SiSolana size={20} color="white" />
        <h2>On-Chain</h2>
        </div>
      </div>
      <div className="card-header orbitron-bold">
        <div>
        <FaTwitter size={20} color="white"/>
        <h2>Off-Chain</h2>
        </div>
      </div>
    </div>
    {/* Horizontal Divider */}
    <div className="divider-line"></div>
    {/* Content Row */}
    <div className="content-section arial-bold">
      <div className="card">
        <p>
          Explore blockchain analytics and on-chain metrics to gain insights
          into real-time transactions.
        </p>
      </div>
      <div className="card">
        <p>
          Dive into market sentiment and off-chain data to understand external
          trends.
        </p>
      </div>
    </div>
  </div>




          <Button buttonText={"Let's Get Started"} />
        </div>
      </section>



      <section className="panel" style={{ height: "400vh"}}>
        <div className="how-to">
          <h1 className="how-to-header orbitron-bold">Before Using SolanAI</h1>
          <p className="mt-4 text-lg">Complete this list of steps in order to make sure that the AI has access to the most accurate information.</p>
  
          <div className="timeline">
            <div className="timeline-step">
              <div className="wallet-icon">
            <IoWalletOutline size={30}/>
            </div>
              <div className="step-text">
                <BubbleNumber number={1}/>
                Input your desired wallets to be tracked.
                </div>
              <div className="wallet-info">
                <a href="#">
                  These wallets will be tracked by SolanAI, which will use the information to make trade recommendations -- choose carefully.
                </a>
              </div>
              <div className="question-boxes">
                <div className="question-box">
                  Finding Profitable Wallets to Track
                  <span className="question-box-span">
                    Go to birdeye.so and filter throught the wallets to find the best addresses to track.
                  </span>
                </div>
                <div className="question-box">
                  Question Box 2: Additional info or another question.
                </div>
              </div>
              
            </div>
            <div className="timeline-step">
              <div className="step-text">
                  < BubbleNumber number={2}/>
                    Second Step
              </div>


            </div>
            <div className="timeline-step">
            < BubbleNumber number={3}/>
              Third Step
            </div>
            <div className="timeline-step">
            < BubbleNumber number={4}/>
              Fourth step
            </div>
          </div>
          </div>
      </section>

      <section className="panel" style={{ height: "100vh"}}>

        <div className="info orbitron-bold" style={{height: "100vh"}}>
          Holistic
        </div>

      </section>


    </main>
       
  );
}