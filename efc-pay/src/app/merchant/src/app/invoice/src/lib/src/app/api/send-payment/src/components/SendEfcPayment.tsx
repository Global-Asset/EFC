"use client";

import { useState } from "react";

export default function SendEfcPayment() {
  const [status, setStatus] = useState("");

  async function sendPayment() {
    const response = await fetch(
      "/api/send-payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CUSTOMER_WALLET",
          to: "MERCHANT_WALLET",
          amount: "100",
        }),
      }
    );

    const data = await response.json();

    setStatus(
      JSON.stringify(data, null, 2)
    );
  }

  return (
    <div>
      <button onClick={sendPayment}>
        Pay 100 EFC
      </button>

      <pre>
        {status}
      </pre>
    </div>
  );
}
