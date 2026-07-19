export type EfcPayment = {
  invoiceId: string;
  payerWallet: string;
  merchantWallet: string;
  amount: number;
  transactionHash: string;
  status: "pending" | "confirmed" | "failed";
};
