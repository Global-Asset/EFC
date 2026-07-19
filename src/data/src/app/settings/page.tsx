import { merchantSettings } from "@/data/settings";

export default function SettingsPage() {
  return (
    <main>
      <h1>
        Merchant Settings
      </h1>

      <p>
        Payment Currency:
        {" "}
        {merchantSettings.currency}
      </p>

      <p>
        Network:
        {" "}
        {merchantSettings.network}
      </p>

      <p>
        Auto Confirm Payments:
        {" "}
        {merchantSettings.autoConfirmPayments
          ? "Enabled"
          : "Disabled"}
      </p>

      <p>
        Notifications:
        {" "}
        {merchantSettings.notifications
          ? "Enabled"
          : "Disabled"}
      </p>
    </main>
  );
}
