"use client";

import { useState } from "react";
import ConnectWallet from "@/components/ConnectWallet";
import EfcBalance from "@/components/EfcBalance";

export default function Home() {
  const [wallet, setWallet] = useState("");

  return (
    <main>
      <h1>
        Efikcoin EFC Pay
      </h1>

      <p>
        Global merchant payment system powered by Efikcoin.
      </p>

      <ConnectWallet
        onConnect={setWallet}
      />

      {wallet && (
        <EfcBalance
          wallet={wallet}
        />
      )}

      <h2>
        EFC Contract Address
      </h2>

      <p>
        0x677ce9cba67f7484ea951a12897ce780cfd8fed1
      </p>
    </main>
  );
}
