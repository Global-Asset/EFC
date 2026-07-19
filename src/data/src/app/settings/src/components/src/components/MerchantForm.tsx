"use client";

import { useState } from "react";

export default function MerchantForm() {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState("");

  function registerMerchant() {
    alert(
      `Merchant: ${name}
Wallet: ${wallet}`
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
    </div>
  );
}
