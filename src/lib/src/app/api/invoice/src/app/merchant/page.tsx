"use client";

import { useState } from "react";

export default function MerchantPage() {
  const [invoice, setInvoice] = useState<string>("");

  async function createInvoice() {
    const response = await fetch("/api/invoice", {
      method: "POST",
    });

    const data = await response.json();

    setInvoice(JSON.stringify(data, null, 2));
  }

  return (
    <main>
      <h1>Efikcoin Merchant Portal</h1>

      <p>
        Create an EFC payment invoice.
      </p>

      <button onClick={createInvoice}>
        Create EFC Invoice
      </button>

      <pre>
        {invoice}
      </pre>
    </main>
  );
}
