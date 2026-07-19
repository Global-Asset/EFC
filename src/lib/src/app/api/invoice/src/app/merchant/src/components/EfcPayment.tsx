import { EFC_TOKEN } from "@/lib/efc";

export default function EfcPayment() {
  return (
    <div>
      <h2>Pay with Efikcoin (EFC)</h2>

      <p>
        Token: {EFC_TOKEN.symbol}
      </p>

      <p>
        Network: {EFC_TOKEN.network}
      </p>

      <p>
        Contract:
      </p>

      <p>
        {EFC_TOKEN.contract}
      </p>
    </div>
  );
}
