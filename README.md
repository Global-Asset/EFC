# Efikcoin Ecosystem & Wallet

**Coin is Life, Life is Coin**  
*In love we build the good nation.*

---

## 🌍 Overview

Efikcoin is a self‑custodial, multi‑chain wallet and ecosystem designed to bring real‑world utility to blockchain. It allows users to:

- Create and manage self‑custodial wallets (password‑protected, encrypted seed).
- Store, send, and receive **BNB, ETH, MATIC, BTC, EFC, USDT**, and custom tokens.
- Stake EFC tokens, earn rewards, and claim them.
- Trade via integrated DEX links (PancakeSwap, Uniswap, QuickSwap, 1inch).
- Track portfolio value and view live price charts.
- Participate in charity initiatives (2% of treasury goes to education, hunger relief, clean water).
- Import custom BEP‑20 / ERC‑20 tokens.
- Automatically redirect a small fee (0.5%) on EFC transfers to the treasury wallet.

Built as a single `index.html` file, it is fully responsive, installable as a PWA, and deployable on GitHub Pages or any static hosting.

---

## ✨ Key Features

### 🔐 Self‑Custodial Wallet
- **Create new wallet** – generates a 12‑word recovery phrase (BIP39).
- **Import existing wallet** – using a 12‑word mnemonic.
- **Password protection** – encrypts the seed phrase in `localStorage`; only the user knows the password.
- **Lock / Unlock** – session‑based; wallet locks automatically on tab close.

### 🌐 Multi‑Chain Support
Automatically displays balances for:
- **BNB Smart Chain** – BNB, EFC, USDT
- **Ethereum** – ETH, USDT
- **Polygon** – MATIC
- **Bitcoin** – BTC (balance via API, send/receive via external services)

### 📊 Dashboard & Coins
- **Total portfolio value** in USD (real‑time price feeds).
- **Coin cards** for each asset – click to open a detailed coin dashboard.
- **Coin Dashboard** includes:
  - Send (with fee redirection for EFC)
  - Receive (address + QR code + copy)
  - Buy / Sell / Swap (links to DEX aggregators)
  - For EFC: Stake, Unstake, Claim (direct smart‑contract interaction)
- **Import custom tokens** – add any BEP‑20 token by contract address.

### 📈 Price & Chart
- Live EFC price displayed on the landing page and wallet dashboard.
- Interactive price chart (24‑hour trend) using Chart.js.

### 💰 Fee Redirection (Treasury)
- Every EFC transfer deducts **0.5%** (configurable) and sends it to:
