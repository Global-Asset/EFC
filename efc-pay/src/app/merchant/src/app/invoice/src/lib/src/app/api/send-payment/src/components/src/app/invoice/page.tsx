import EfcPayment from "@/components/EfcPayment";
import PaymentQR from "@/components/PaymentQR";
import SendEfcPayment from "@/components/SendEfcPayment";

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

      <SendEfcPayment />

    </main>
  );
}
