"use client";

import { useWallet } from "@/hooks/useWallet";

type Props = {
  onConnect: (wallet: string) => void;
};

export default function ConnectWallet({
  onConnect,
}: Props) {
  const { wallet, connectWallet } = useWallet();

  async function handleConnect() {
    await connectWallet();

    if (wallet) {
      onConnect(wallet);
    }
  }

  return (
    <div>
      <button onClick={handleConnect}>
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
