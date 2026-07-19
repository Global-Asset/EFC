"use client";

import { useState } from "react";

export default function MerchantForm() {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");

  async function registerMerchant() {
    const response = await fetch(
      "/api/register-merchant",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          wallet,
        }),
      }
    );

    const data = await response.json();

    setMessage(
      `Registered: ${data.name}`
    );
  }

  return (
    <div>
      <h2>
        Register Merchant
      </h2>

      <input
        placeholder="Business Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Wallet Address"
        value={wallet}
        onChange={(e) =>
          setWallet(e.target.value)
        }
      />

      <button onClick={registerMerchant}>
        Register
      </button>

      <p>
        {message}
      </p>
    </div>
  );
}
