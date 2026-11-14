# 🌿 GreenVote – Vote for a Greener Campus

**A Decentralized Blockchain-Based Voting Application using Ethereum Sepolia Test Network and MetaMask Wallet.**

## 📌 Project Overview

GreenVote is a decentralized voting application developed using Ethereum blockchain technology. It demonstrates secure, transparent, and tamper-resistant digital voting through a campus sustainability election.

Users can connect their MetaMask wallet and vote for one of three sustainability initiatives. All voting transactions are recorded on the Ethereum Sepolia Test Network using a Solidity smart contract.

## 🎯 Voting Options

The application allows users to vote for the following campus sustainability initiatives:

- ☀️ **Solar Energy** – Promoting clean and renewable solar power.
- ♻️ **Smart Waste Management** – Encouraging intelligent waste segregation and recycling.
- 💧 **Rainwater Harvesting** – Promoting water conservation and reuse.

## ✨ Key Features

- Decentralized voting using Ethereum blockchain.
- MetaMask wallet integration.
- One-wallet-one-vote mechanism.
- Smart contract-based vote recording.
- Transparent and tamper-resistant voting records.
- Live vote count display.
- Automatic identification of the leading initiative.
- User-friendly and responsive interface.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Solidity | Smart contract development |
| Ethereum | Blockchain platform |
| Sepolia Testnet | Smart contract deployment |
| MetaMask | Wallet connection and transaction approval |
| Remix IDE | Smart contract compilation and deployment |
| HTML5 | Frontend structure |
| CSS3 | User interface styling |
| JavaScript | Application functionality |
| ethers.js | Blockchain interaction |
| Vercel | Application hosting |

## ⚙️ How It Works

1. Open the GreenVote application.
2. Connect your MetaMask wallet.
3. Switch to the Ethereum Sepolia Test Network.
4. Select one of the three sustainability initiatives.
5. Click **Cast Vote**.
6. Confirm the transaction through MetaMask.
7. Wait for the transaction to be confirmed on the blockchain.
8. View the updated voting results.

Each Ethereum wallet address is allowed to vote only once.

## 📜 Smart Contract Details

- **Contract Name:** Voting
- **Language:** Solidity
- **Solidity Version:** ^0.8.20
- **Network:** Ethereum Sepolia Testnet
- **Contract Address:** `0xbe31bA4f12Bd83843Ed2F03f3e9e024B383e685d`

### Smart Contract Functions

- `vote(uint256 candidateIndex)` – Casts a vote for the selected option.
- `getCandidates()` – Retrieves candidate information and vote counts.
- `hasVoted(address)` – Checks whether a wallet has already voted.
- `getWinner()` – Identifies the initiative with the highest vote count.

## 📂 Project Structure

```text
GreenVote/
│
├── VotingDApp/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Voting1.sol
│
├── GreenVote Documentation.pdf
│
├── GreenVote Documentation.docx
│
└── README.md
```

## 🚀 Live Application

**Try GreenVote here:**

https://votingdapp-xi.vercel.app/

## 🔐 Network Requirements

To use the application:

- Install the MetaMask browser extension.
- Connect an Ethereum wallet.
- Select the Sepolia Test Network.
- Ensure that the wallet has sufficient Sepolia test ETH for transaction gas fees.

**Note:** This project is developed for demonstration and educational purposes using the Ethereum Sepolia Test Network. It is not intended for official elections or real-money voting.

## 👩‍💻 Developer

**Rakshya Devi R**

B.Tech – Computer Science and Engineering

Project: GreenVote – Decentralized Voting Application

---
