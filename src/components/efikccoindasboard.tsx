// src/components/EfikcoinDashboard.tsx
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { EFC_ABI } from "../abi/efc";

const EFC_ADDRESS = "0x677Ce9CBa67f7484ea951a12897CE780cFd8fED1";

const EfikcoinDashboard: React.FC = () => {
  const [balance, setBalance] = useState<string>("0");
  const [symbol, setSymbol] = useState<string>("EFC");
  const [decimals, setDecimals] = useState<number>(18);
  const [account, setAccount] = useState<string>("");

  // Connect wallet (MetaMask)
  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("Please install MetaMask.");
      return;
    }
    const provider = new ethers.BrowserProvider((window as any).ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
  };

  const loadBalance = async () => {
    try {
      if (!account) return;
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const contract = new ethers.Contract(EFC_ADDRESS, EFC_ABI, provider);

      const [rawBalance, tokenDecimals, tokenSymbol] = await Promise.all([
        contract.balanceOf(account),
        contract.decimals(),
        contract.symbol(),
      ]);

      setDecimals(Number(tokenDecimals));
      setSymbol(tokenSymbol);

      const formatted = Number(
        ethers.formatUnits(rawBalance, tokenDecimals)
      ).toLocaleString();
      setBalance(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (account) {
      loadBalance();
    }
  }, [account]);

  return (
    <div className="min-h-screen bg-[#050816] text-white font-sans">
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-cyan-500/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-cyan-400 flex items-center justify-center text-xs font-bold">
            {symbol}
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-wide">
              EFIKCOIN <span className="text-cyan-400">{symbol}</span>
            </h1>
            <p className="text-xs text-cyan-200/70">
              Empowering Global Crypto Connectivity
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end text-sm">
          <div className="flex gap-4">
            <span className="text-cyan-300">{symbol}/BNB</span>
            <span className="text-cyan-300">{symbol}/USDT</span>
            <span className="text-cyan-300">{symbol}/BTC</span>
          </div>
          <span className="text-green-400 text-xs mt-1">
            Bullish ↑ +12.4% 24h
          </span>
        </div>
      </header>

      {/* Main content */}
      <main className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6 px-8 py-6">
        {/* Left side omitted for brevity – keep the map + chart from previous code */}

        {/* Right: wallet + actions */}
        <aside className="space-y-4">
          <div className="rounded-xl bg-[#050816] border border-cyan-500/40 p-5">
            <h2 className="text-sm font-semibold mb-2 text-cyan-200">
              Your {symbol} Balance
            </h2>

            {!account ? (
              <button
                onClick={connectWallet}
                className="py-2 px-4 rounded-lg bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition"
              >
                Connect Wallet
              </button>
            ) : (
              <>
                <p className="text-xs text-cyan-100/70 mb-2 break-all">
                  {account}
                </p>
                <p className="text-xl font-bold text-cyan-300">
                  {balance} {symbol}
                </p>
                <p className="text-xs text-cyan-100/70 mt-1">
                  Decimals: {decimals}
                </p>
              </>
            )}

            <div className="mt-4 flex flex-col gap-2">
              <button className="w-full py-2 rounded-lg bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition">
                Send {symbol}
              </button>
              <button className="w-full py-2 rounded-lg bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition">
                Stake Now
              </button>
              <button className="w-full py-2 rounded-lg bg-purple-500 text-white text-sm font-semibold hover:bg-purple-400 transition">
                Claim Airdrop
              </button>
              <button
                onClick={loadBalance}
                className="w-full py-2 rounded-lg bg-white/10 text-cyan-200 text-sm font-semibold hover:bg-white/20 transition"
              >
                Refresh
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-[#050816] border border-cyan-500/40 p-4 text-[11px] text-cyan-100/80">
            EFIKCOIN {symbol} — Mapping the Future of Decentralized Finance.
          </div>
        </aside>
      </main>
    </div>
  );
};

export default EfikcoinDashboard;
