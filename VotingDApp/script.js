const CONTRACT_ADDRESS =
    "0xbe31bA4f12Bd83843Ed2F03f3e9e024B383e685d";

const CONTRACT_ABI = [
    "function vote(uint256 candidateIndex)",
    "function getCandidates() view returns ((string name,uint256 voteCount)[])",
    "function hasVoted(address) view returns (bool)"
];

const displayNames = [
    "Solar Energy",
    "Smart Waste Management",
    "Rainwater Harvesting"
];

let provider;
let signer;
let contract;

async function connectWallet() {

    if (!window.ethereum) {
        alert("MetaMask is not installed.");
        return;
    }

    try {

        await window.ethereum.request({
            method: "eth_requestAccounts"
        });

        const chainId = await window.ethereum.request({
            method: "eth_chainId"
        });

        // Sepolia Chain ID = 11155111 = 0xaa36a7
        if (chainId !== "0xaa36a7") {

            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0xaa36a7" }]
                });
            } catch (error) {
                document.getElementById("message").innerText =
                    "Please switch MetaMask to the Sepolia Test Network.";
                return;
            }
        }

        provider = new ethers.BrowserProvider(window.ethereum);

        signer = await provider.getSigner();

        contract = new ethers.Contract(
            CONTRACT_ADDRESS,
            CONTRACT_ABI,
            signer
        );

        const address = await signer.getAddress();

        document.getElementById("connectBtn").innerText =
            address.substring(0, 6) +
            "..." +
            address.substring(address.length - 4);

        document.getElementById("message").innerText =
            "✓ Wallet connected • Sepolia Testnet";

        await loadVotes();

    } catch (error) {

        console.error(error);

        document.getElementById("message").innerText =
            "Wallet connection failed.";
    }
}


async function loadVotes() {

    if (!contract) return;

    try {

        const candidates = await contract.getCandidates();

        let total = 0;
        let highestVotes = -1;
        let leaderIndex = 0;

        for (let i = 0; i < candidates.length; i++) {

            const votes = Number(candidates[i].voteCount);

            document.getElementById("votes" + i).innerText =
                votes;

            total += votes;

            if (votes > highestVotes) {
                highestVotes = votes;
                leaderIndex = i;
            }
        }

        document.getElementById("totalVotes").innerText =
            total;

        if (total === 0) {
            document.getElementById("leader").innerText =
                "Waiting for votes...";
        } else {
            document.getElementById("leader").innerText =
                "🌿 " + displayNames[leaderIndex];
        }

    } catch (error) {
        console.error("Unable to load votes:", error);
    }
}


async function castVote(candidateIndex) {

    if (!contract) {
        await connectWallet();

        if (!contract) return;
    }

    try {

        const address = await signer.getAddress();

        const alreadyVoted =
            await contract.hasVoted(address);

        if (alreadyVoted) {

            document.getElementById("message").innerText =
                "⚠ This wallet has already voted.";

            return;
        }

        document.getElementById("message").innerText =
            "Confirm the vote in MetaMask...";

        const transaction =
            await contract.vote(candidateIndex);

        document.getElementById("message").innerText =
            "Transaction submitted. Waiting for Sepolia confirmation...";

        await transaction.wait();

        document.getElementById("message").innerText =
            "✓ Vote successfully recorded on the Sepolia blockchain!";

        await loadVotes();

    } catch (error) {

        console.error(error);

        if (error.code === 4001 ||
            error.code === "ACTION_REJECTED") {

            document.getElementById("message").innerText =
                "Transaction cancelled.";

        } else {

            document.getElementById("message").innerText =
                "Unable to cast vote. This wallet may have already voted.";
        }
    }
}


// Refresh if MetaMask account changes
if (window.ethereum) {

    window.ethereum.on("accountsChanged", () => {
        location.reload();
    });

    window.ethereum.on("chainChanged", () => {
        location.reload();
    });
}