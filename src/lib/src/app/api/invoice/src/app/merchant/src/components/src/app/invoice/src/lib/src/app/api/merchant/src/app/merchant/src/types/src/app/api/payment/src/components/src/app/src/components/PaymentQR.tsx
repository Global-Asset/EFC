type PaymentQRProps = {
  wallet: string;
  amount: string;
};

export default function PaymentQR({
  wallet,
  amount,
}: PaymentQRProps) {
  return (
    <div>
      <h3>
        EFC Payment QR
      </h3>

      <p>
        Wallet:
      </p>

      <p>
        {wallet}
      </p>

      <p>
        Amount:
      </p>

      <p>
        {amount} EFC
      </p>
    </div>
  );
}
