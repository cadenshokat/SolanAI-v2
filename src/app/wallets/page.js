"use client";
import React, { useState, useEffect } from 'react';
import './page.css';
import { FiCopy } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { Header } from "../components/Header";
import AddButton from "../components/AddButton";
import Logo from '../../../public/favicon.svg';
import Link from "next/link";
import Image from "next/image";
import { HiOutlineWallet } from "react-icons/hi2";
import { TbClockHour4 } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";
import { IoChatboxOutline } from "react-icons/io5";
import { RiGeminiLine } from "react-icons/ri";


// Helper to truncate a long wallet address
function truncateAddress(address) {
  if (!address || address.length <= 8) return address;
  return address.substring(0, 4) + "..." + address.substring(address.length - 4);
}

const WalletTracker = () => {
  // State for wallet input and list
  const [walletInput, setWalletInput] = useState('');
  const [wallets, setWallets] = useState([]);
  
  // Track the "copied" state per wallet
  const [copiedIcon, setCopiedIcon] = useState({});
  
  // Show/hide the "copied" message
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  
  // Load wallets from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('trackedWallets');
    if (saved) {
      setWallets(JSON.parse(saved));
    }
  }, []);
  
  // Persist wallets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('trackedWallets', JSON.stringify(wallets));
  }, [wallets]);

  // Add a wallet to the list
  const handleAddWallet = () => {
    if (walletInput && wallets.length < 10) {
      const newWallet = walletInput.trim();
      const updatedWallets = [...wallets, newWallet];
      setWallets(updatedWallets);
      setWalletInput('');
    }
  };

  // Remove a wallet from the list
  const handleRemoveWallet = (walletToRemove) => {
    const updatedWallets = wallets.filter(wallet => wallet !== walletToRemove);
    setWallets(updatedWallets);
  };

  // Copy wallet address to clipboard
  const handleCopyAddress = (wallet) => {
    navigator.clipboard.writeText(wallet);
    setCopiedIcon({ [wallet]: true });
    setMessage(`Copied ${truncateAddress(wallet)} to clipboard!`);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setCopiedIcon({ [wallet]: false });
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddWallet();
    }
  };

  return (
    <main>
      <div className="dashboard-container">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="panel-header orbitron-bold">
            <div className="logo-section">
              <Link href="/">
                <div className="header-logo">
                  <Image src={Logo} alt="SolanAI" className="logo" width={45} height={45} />
                  <h1 className="Title orbitron-bold">SolanAI</h1>
                </div>
              </Link>
            </div>
            <div className="logo-description">
              <p className="orbitron-bold">Advanced Wallet Tracking for Advanced Trading</p>
            </div>
            <div className="section-icons">
              <Link href="/chat">
                <IoChatboxOutline className="chat-icon" size={20} color="white"/>
              </Link>
              <Link href="/trending">
                <AiOutlineFire className="trending-icon" size={20} color="white"/>
              </Link>
              <Link href="/picks">
                <RiGeminiLine className="gem-icon" size={20} color="white"/>
              </Link>
            </div>

          </div>

          {/* Tracker Section Links */}
          <div className="panel-links">
            <div className="tracker-links">
              <span className="link">
                <Link href="#wallet-manager" className="tracker-link">
                  <div className="link-text">
                    <HiOutlineWallet className="wallet-icon" size={23}/>
                    Wallet Manager
                  </div>
                </Link>
              </span>
              <span className="link">
                <Link href="#recent-transactions" className="tracker-link">
                  <div className="link-text">
                    <TbClockHour4 className="clock-icon" size={23}/>
                    Recent Transactions
                    
                  </div>
                </Link>
              </span>
              <span className="link">
                <Link href="#popular-transactions" className="tracker-link">
                  <div className="link-text">
                    <AiOutlineFire className="fire-icon" size={23}/>
                    Popular Transactions
                  </div>
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - Wallet Tracker */}
        <div className="wallet-container">
          <h2
            id="wallet-manager"
            style={{ fontSize: "2rem", padding: ".5rem", color: "#ffffff", fontWeight: "900"}}
          >
            Wallet Manager
          </h2>

          {/* Wallet input */}
          <div className="wallet-input">
            <input
              className="wallet-input-field"
              type="text"
              placeholder="Enter wallet address"
              color="#ffffff"
              value={walletInput}
              onChange={(e) => setWalletInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <AddButton onClick={handleAddWallet} />
          </div>

          {/* Wallet List */}
          <div className="wallet-list-container">
            <h3 className="wallet-list-title">My Wallets</h3>
            <div className="wallet-list">
            {wallets.map((wallet, index) => (
              <div key={index} className="wallet-item">
                <div className="wallet-details">
                  <span className="wallet-address">{truncateAddress(wallet)}</span>
                  <span
                    className="copy-icon"
                    onClick={() => handleCopyAddress(wallet)}
                  >
                    {copiedIcon[wallet] ? <IoMdCheckmark size={15} /> : <FiCopy size={15} />}
                  </span>
                </div>
                <div className="wallet-actions">
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveWallet(wallet)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Copy success message */}
      <div className={`copy-message ${showMessage ? 'show' : ''}`}>
        {message}
      </div>
    </main>
  );
};

export default WalletTracker;
