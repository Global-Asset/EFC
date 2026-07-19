import EfcPayment from "@/components/EfcPayment";
import PaymentQR from "@/components/PaymentQR";

export default function InvoicePage() {
  return (
    <main>
      <h1>
        Efikcoin Payment Invoice
      </h1>

      <p>
        Pay using EFC on BNB Smart Chain.
      </p>

      <EfcPayment />

      <PaymentQR
        wallet="ENTER_MERCHANT_WALLET"
        amount="100"
      />

      <button>
        Check Payment
      </button>
    </main>
  );
}
