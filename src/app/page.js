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
import { GiSettingsKnobs } from "react-icons/gi";
import { VscAccount } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa";
import { Footer } from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  {/*

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
            pin: false,
            pinSpacing: false,
            markers: false,
        });
    });

  }, []); */}

  return (
    <main>
      < Header />
      

{/* Background section with Threads and overlayed title */}
<section className="panel" style={{ height: "100vh", position: "relative" }}>
  {/*<Threads
    amplitude={.5}
    distance={0}
    enableMouseInteraction={false}
    className="threads-container"
  />*/}
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
        Meet SolanAI
      </GradientText>
    </h1>
    <div className="title-description text-lg"><ShinyText text="Your one-stop solution for all things Solana." disabled={false} speed={3} className='custom-class' /></div>
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
          <div className="glow-card arial-bold">
            SolanAI collets data from 30+ different high-quality indicators to make the most profiable decisions.
          </div>
          <div className="decor-box arial-bold">
            hello
            <div className="decor-box-child">

            </div>
            <div className="decor-box-child">
              
            </div>
          </div>

        
          <div className="card-container">
            {/* Header Row */}
            <div className="header-section">
              <div className="card-header orbitron-bold">
                <div>
                <SiSolana size={20} color="white" />
                <h2>On-Chain Data</h2>
                </div>
              </div>
              <div className="card-header orbitron-bold">
                <div>
                <FaTwitter size={20} color="white"/>
                <h2>Off-Chain Data</h2>
                </div>
              </div>
            </div>
            {/* Horizontal Divider */}
            <div className="divider-line"></div>
            {/* Content Row */}
            <div className="content-section arial-bold">
              <div className="card">
                <p>
                  Listens directly on the blockchain for <span className="highlight"><LinearGradient gradient={['to left', '#00FFA3 ,#DC1FFF']}>whale</LinearGradient></span> transactions
                </p>
                <p>
                  Uses wallet tracking to capture real-time information on potential investments. 
                </p>
                <p>

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
          <h1 className="how-to-header orbitron-bold"><ShinyText text="Before Using SolanAI" disabled={false} speed={3} className='custom-class' /></h1>
          <div className="glow-card text-lg">Complete this list of steps in order to make sure that the AI has access to the most accurate information.</div>
  
          <div className="timeline">
            <div className="timeline-step">            
            
                <div className="wallet-icon">
                  <VscAccount size={30}/>
                </div>
                <div className="step-text">
                  <BubbleNumber number={1}/>
                  Create an account
                  </div>
                <div className="wallet-info">
                  <a href="#">
                  Sign up to unlock AI trade assistance, secure portfolio tracking, real-time alerts, and many more features.
                  </a>
                </div>
                <div className="question-boxes">
                  <div className="question-box">
                    <div className="q-head orbitron-bold">
                  Personalized Insights
                    </div>
                    <div className="question-box-span">
                    Receive tailored market analysis and alerts based on your trading preferences.
                    </div>
                  </div>
                  <div className="question-box">
                    <div className="q-head orbitron-bold">
                     Enhanced Security
                    </div>
                    <div className="question-box-span">
                    Your data is encrypted and stored securely, ensuring your privacy and peace of mind.
                    </div>
                  </div>
                </div>

                <div className="signup-container" style={{ marginTop: "10rem" }}>
                  <Button className="signup-button" buttonText={"Let's Get Started"} />
                </div>
              </div>
            <div className="timeline-step">
              <div className="wallet-icon">
            <IoWalletOutline size={30}/>
            </div>
              <div className="step-text">
                <BubbleNumber number={2}/>
                Input your desired wallets to be tracked.
                </div>
              <div className="wallet-info">
                <a href="#">
                  These wallets will be tracked by SolanAI, which will use the information to make trade recommendations -- choose carefully.
                </a>
              </div>
              <div className="question-boxes">
                <div className="question-box">
                <div className="q-head orbitron-bold">
                  <FaRegLightbulb size={20}/>
                  Finding Reliable Wallets
                </div>
                  <span className="question-box-span">
                    Input reliable wallets in order to ensure the best accuracy from SolanAI.
                  </span>
                  <span className="question-box-span">
                    SolanAI will use the wallets to gain insights on potential buys.
                  </span>
                </div>
                <div className="question-box">
                  Question Box 2: Additional info or another question.
                </div>
              </div>
              
            </div>
            <div className="timeline-step">
              <div className="wallet-icon">
                <GiSettingsKnobs size={30} />
              </div>
              <div className="step-text">
                <BubbleNumber number={3} />
                Configure Your Trading Settings.
              </div>
              <div className="step-3">
                Tailor your strategy with settings that adjust relatively based on AI insights.
              </div>
              <div className="settings-panel">
                <div className="setting-row">
                  <div className="setting-label">Risk Level</div>
                  <div className="setting-options">
                    <span className="option">Low</span>
                    <span className="option">Moderate</span>
                    <span className="option">High</span>
                  </div>
                </div>
                <div className="setting-row">
                  <div className="setting-label">Trade Amount</div>
                  <div className="setting-options">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="preference-slider"
                    />
                    <span className="option-value">50%</span>
                  </div>
                </div>
                <div className="setting-row">
                  <div className="setting-label">Trading Frequency</div>
                  <div className="setting-options">
                    <span className="option">Conservative</span>
                    <span className="option">Moderate</span>
                    <span className="option">Aggressive</span>
                  </div>
                </div>
                <div className="setting-row">
                  <div className="setting-label">Stop Loss (%)</div>
                  <div className="setting-options">
                    <input type="number" placeholder="e.g., 5" className="stop-loss" />
                  </div>
                  <div className="setting-label">Take Profit (%)</div>
                  <div className="setting-options">
                    <input type="number" placeholder="e.g., 10" className="take-profit" />
                  </div>
                </div>

                <div className="setting-row-button">
                  <button className="save-settings-button">
                    Save
                  </button>
                </div>
                
                
                
                {/* Add more relative settings as needed */}
              </div>
              <div className="extra-div">
                Extra
              </div>
              
            </div>

            <div className="timeline-step">
              <div className="wallet-icon">
                <GiSettingsKnobs size={30}/>
              </div>
              <div className="step-text">
                < BubbleNumber number={4}/>
                  Third Step
              </div>
            </div>
            
            
          </div>
          
          </div>
      </section>

      <section className="panel" style={{ height: "100vh"}}>

        <div className="info orbitron-bold" style={{height: "100vh"}}>
          Holistic
        </div>

      </section>
      <Footer />


    </main>
       
  );
}
