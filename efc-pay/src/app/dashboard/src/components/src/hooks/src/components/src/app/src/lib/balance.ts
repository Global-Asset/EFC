import { EFC_TOKEN } from "./efc";

export function getEfcBalance(wallet: string) {
  return {
    wallet,
    token: EFC_TOKEN.symbol,
    contract: EFC_TOKEN.contract,
    balance: "0"
  };
}
