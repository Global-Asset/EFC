export type PaymentResponse = {
  success: boolean;
  paymentId: string;
  transactionHash: string;
  status: string;
  message: string;
};
