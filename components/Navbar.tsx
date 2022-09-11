import * as React from "react"

const Navigation = ({
  onConnectClick,
  isWalletConnected,
}: {
  onConnectClick: (event: React.MouseEvent<HTMLElement>) => void
  isWalletConnected: boolean
}) => {
  return (
    <nav className="flex flex-row h-45 items-center pt-4 pb-4">
      <div className="font-mono text-white text-4xl mr-20">
        VIEW TRENDING COLLECTIONS
      </div>
      <button
        className={`rounded bg-amber-100 h-16 font-bold w-96 text-2xl ${
          isWalletConnected ? "text-amber-600" : "text-lime-500"
        }`}
        onClick={onConnectClick}
      >
        {isWalletConnected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
    </nav>
  )
}

export default Navigation
