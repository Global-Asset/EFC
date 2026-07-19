import { EFC_TOKEN } from "./efc";

export function createEfcTransaction(
  from: string,
  to: string,
  amount: string
) {
  return {
    token: EFC_TOKEN.symbol,
    contract: EFC_TOKEN.contract,
    from,
    to,
    amount,
    status: "created"
  };
}
