import EfcPayment from "@/components/EfcPayment";

export default function InvoicePage() {
  return (
    <main>
      <h1>
        Efikcoin Payment Invoice
      </h1>

      <p>
        Complete your payment using EFC.
      </p>

      <EfcPayment />

      <button>
        Check Payment
      </button>
    </main>
  );
}
