import ConnectWallet from "@/components/ConnectWallet";

export default function Home() {
  return (
    <main>
      <h1>
        Efikcoin EFC Pay
      </h1>

      <p>
        Global merchant payment system powered by Efikcoin.
      </p>

      <ConnectWallet />

      <h2>
        EFC Contract Address
      </h2>

      <p>
        0x677ce9cba67f7484ea951a12897ce780cfd8fed1
      </p>
    </main>
  );
}
