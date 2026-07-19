"use client";

import { useState } from "react";

type Props = {
  wallet: string;
};

export default function EfcBalance({
  wallet,
}: Props) {
  const [balance, setBalance] = useState("0");

  async function checkBalance() {
    const response = await fetch("/api/balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wallet,
      }),
    });

    const data = await response.json();

    setBalance(data.balance);
  }

  return (
    <div>
      <button onClick={checkBalance}>
        Check EFC Balance
      </button>

      <p>
        Balance: {balance} EFC
      </p>
    </div>
  );
}
