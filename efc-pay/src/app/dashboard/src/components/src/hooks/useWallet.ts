"use client";

import { useState } from "react";

export function useWallet() {
  const [wallet, setWallet] = useState("");

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install a Web3 wallet");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWallet(accounts[0]);
  }

  return {
    wallet,
    connectWallet,
  };
}
