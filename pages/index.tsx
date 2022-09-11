import type { NextPage } from "next"
import Head from "next/head"
import * as React from "react"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import TrendingCollections from "../components/TrendingCollections"

const Home: NextPage = () => {
  const [isWalletConnected, setWalletConnected] = useState<boolean>(false)

  // Use browser's session storage to maintain state between page reloads/between different tabs
  // if wallet was connected before reload, it should be connected post reload as well
  useEffect(() => {
    const walletConnected = sessionStorage.getItem("walletConnected")
    setWalletConnected(
      walletConnected != null ? JSON.parse(walletConnected) : false
    )
  }, [])

  const handleConnectWallet = () => {
    // Set walletConnected state in session storage
    sessionStorage.setItem("walletConnected", String(!isWalletConnected))
    setWalletConnected((isWalletConnected) => !isWalletConnected)
  }

  return (
    <div className="flex flex-col h-screen place-items-center bg-slate-600 overflow-y-auto">
      <Head>
        <title>Trending Collections</title>
        <link rel="icon" href="/fireIcon.jpeg" />
      </Head>
      <Navbar
        onConnectClick={handleConnectWallet}
        isWalletConnected={isWalletConnected}
      />
      {/* Display Trending Collections only if wallet is connected */}
      {isWalletConnected && <TrendingCollections />}
    </div>
  )
}

export default Home
