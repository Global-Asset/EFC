"use client";

import { useState } from "react";

export default function MerchantPage() {
  const [merchant, setMerchant] = useState("");

  async function registerMerchant() {
    const response = await fetch("/api/merchant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "EFC Merchant",
        wallet: "ENTER_MERCHANT_WALLET"
      }),
    });

    const data = await response.json();

    setMerchant(JSON.stringify(data, null, 2));
  }

  return (
    <main>
      <h1>
        Efikcoin Merchant Portal
      </h1>

      <button onClick={registerMerchant}>
        Register Merchant
      </button>

      <pre>
        {merchant}
      </pre>
    </main>
  );
}
