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
import GradientText from './components/GradientText.js'


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
      <section className="panel" style={{ }}>
         
        <div className="page">
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
                  Question Box 1: Some info or question here.
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