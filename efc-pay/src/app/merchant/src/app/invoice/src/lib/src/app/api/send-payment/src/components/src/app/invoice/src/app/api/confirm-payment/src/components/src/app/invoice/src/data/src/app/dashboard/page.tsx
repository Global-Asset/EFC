import { payments } from "@/data/payments";

export default function DashboardPage() {
  return (
    <main>
      <h1>
        EFC Merchant Dashboard
      </h1>

      <p>
        View your Efikcoin payment activity.
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

          <p>
            Date: {payment.date}
          </p>

          <hr />
        </div>
      ))}
    </main>
  );
}
