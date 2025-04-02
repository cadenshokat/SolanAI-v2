import React from 'react'

const WalletOverview = ( {walletAddress} ) => {
    return (
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
        </div>
    )
}