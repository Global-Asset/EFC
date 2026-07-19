import { payments } from "@/data/payments";
import { merchants } from "@/data/merchants";

export default function DashboardPage() {
  const merchant = merchants[0];

  return (
    <main>
      <h1>
        EFC Merchant Dashboard
      </h1>

      <h2>
        Merchant Profile
      </h2>

      <p>
        Name: {merchant.name}
      </p>

      <p>
        Wallet: {merchant.wallet}
      </p>

      <p>
        Status: {merchant.status}
      </p>

      <h2>
        Payment History
      </h2>

      {payments.map((payment) => (
        <div key={payment.id}>
          <p>
            Customer: {payment.customer}
          </p>

          <p>
            Amount: {payment.amount}
          </p>

          <p>
            Status: {payment.status}
          </p>

          <hr />
        </div>
      ))}
    </main>
  );
}
