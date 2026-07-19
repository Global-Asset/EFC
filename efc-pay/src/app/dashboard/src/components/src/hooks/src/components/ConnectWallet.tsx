"use client";

import { useWallet } from "@/hooks/useWallet";

export default function ConnectWallet() {
  const { wallet, connectWallet } = useWallet();

  return (
    <div>
      <button onClick={connectWallet}>
        Connect Wallet
      </button>

      {wallet && (
        <p>
          Wallet: {wallet}
        </p>
      )}
    </div>
  );
}
