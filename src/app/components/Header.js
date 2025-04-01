"use client";
import './Header.css';
import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/favicon.svg';
import Link from 'next/link';

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
    </header>
  );
}
