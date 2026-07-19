"use client";

import { useState } from "react";

export default function ConfirmPayment() {
  const [hash, setHash] = useState("");
  const [result, setResult] = useState("");

  async function checkPayment() {
    const response = await fetch(
      "/api/confirm-payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactionHash: hash,
        }),
      }
    );

    const data = await response.json();

    setResult(
      JSON.stringify(data, null, 2)
    );
  }

  return (
    <div>
      <h3>
        Confirm EFC Payment
      </h3>

      <input
        placeholder="Transaction Hash"
        value={hash}
        onChange={(e) =>
          setHash(e.target.value)
        }
      />

      <button onClick={checkPayment}>
        Check Payment
      </button>

      <pre>
        {result}
      </pre>
    </div>
  );
}
