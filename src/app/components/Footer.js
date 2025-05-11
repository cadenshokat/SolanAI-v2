"use client";
import './Footer.css';
import React from 'react';
import Link from 'next/link';
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

export function Footer() {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-columns">
                <div className="footer-column">
                    <div className="nav-item"><Link href="/wallets">Wallet Tracker</Link></div>
                    <div className="nav-item"><a href="#trending">Trending</a></div>
                    <div className="nav-item"><a href="#picks">AI Picks</a></div>
                    <div className="nav-item"><Link href="/chat">Chat</Link></div>  
                </div>
                <div className="footer-column">
                    <h2 className="footer-title">Contact</h2>
                    <p className="footer-text">Email:</p>
                </div>
                <div className="footer-column">
                    <h2 className="footer-title">Resources</h2>
                    <p className="footer-text">Documentation</p>
                    <p className="footer-text">API Reference</p>
                </div>
            </div>
            <div className="footer-links">
                <p className="footer-text"></p>
            
                <nav className="socials">
                    <div className="git"><Link href="https://github.com/cadenshokat/SolanAI-v2" target="_blank"><LuGithub size={20} color="white"/></Link></div>
                    <div className="linked-in"><Link href="https://www.linkedin.com/in/caden-shokat-866766300" target="_blank"><CiLinkedin size={23} color="white"/></Link></div>
                </nav>
            </div>
            <div className="footer-bottom">
                <p className="footer-text">© 2025 SolanAI. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
    }