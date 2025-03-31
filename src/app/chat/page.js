"use client";
import React, { useState, useRef, useEffect } from "react";
import "./page.css";
import {Header} from "../components/Header";
import ChatButton from "../components/ChatButton.js";

export default function ChatSection() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"; // Reset height
      const maxHeight = 96; // Approx. 4 lines (adjust as needed)
      const newHeight = textAreaRef.current.scrollHeight;
      if (newHeight > maxHeight) {
        textAreaRef.current.style.height = maxHeight + "px";
        textAreaRef.current.style.overflowY = "auto";
      } else {
        textAreaRef.current.style.height = newHeight + "px";
        textAreaRef.current.style.overflowY = "hidden";
      }
    }
  }, [inputValue]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;
    // Add user's message to the list
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: inputValue }
    ]);
    setInputValue("");
    
    // Simulate a basic AI response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "I'm working on my responses..." }
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Scroll to the bottom whenever messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
    <Header />
    <main id="chat" className="chat-section">
      <div className="chat-container">
        <div className="chat-header orbitron-bold">
          <h2>Chat with SolanAI</h2>
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <span>{msg.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-container">
          <textarea
            className="chat-input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <ChatButton onClick={handleSend} />
        </div>
      </div>
    </main>
    </>
  );
}
