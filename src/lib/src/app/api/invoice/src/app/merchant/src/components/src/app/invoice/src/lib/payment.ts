import { EFC_TOKEN } from "./efc";

export function verifyEfcPayment(
  wallet: string,
  amount: number
) {
  return {
    wallet,
    amount,
    token: EFC_TOKEN.symbol,
    contract: EFC_TOKEN.contract,
    status: "waiting"
  };
}
