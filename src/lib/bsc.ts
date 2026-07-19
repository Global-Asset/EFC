import { EFC_TOKEN, BSC_RPC } from "./efc";

export const blockchain = {
  network: "BNB Smart Chain",
  rpc: BSC_RPC,
  token: EFC_TOKEN.contract,
};

export function getEfcContractAddress() {
  return EFC_TOKEN.contract;
}
