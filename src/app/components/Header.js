"use client";
import './Header.css';
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/SolanAI-1-removebg.png';
import Link from 'next/link';
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

export function Header() {
  return (
    <header className="header">
       <Link href="/">
      <div className="header-logo">
       
        <Image src={Logo} alt="SolanAI" className="logo" width={50} height={50} />
        <h1 className="Title orbitron-bold">SolanAI</h1>
        
      </div>
      </Link>
      
      <nav className="header-nav orbitron-bold">
        <div className="nav-item"><Link href="/wallets">Wallet Tracker</Link></div>
        <div className="nav-item"><a href="#trending">Trending</a></div>
        <div className="nav-item"><a href="#picks">AI Picks</a></div>
        <div className="nav-item"><Link href="/chat">Chat</Link></div>
      </nav>

      <nav className="socials">
        <div className="git"><Link href="https://github.com/cadenshokat/SolanAI-v2" target="_blank"><LuGithub size={20} color="white"/></Link></div>
        <div className="linked-in"><Link href="https://www.linkedin.com/in/caden-shokat-866766300" target="_blank"><CiLinkedin size={23} color="white"/></Link></div>
      </nav>
    </header>
  );
}
