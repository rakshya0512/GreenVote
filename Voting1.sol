// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {

    struct Candidate {
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    constructor() {
        candidates.push(Candidate("Alice", 0));
        candidates.push(Candidate("Bob", 0));
        candidates.push(Candidate("Charlie", 0));
    }

    function vote(uint256 candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(candidateIndex < candidates.length, "Invalid candidate");

        candidates[candidateIndex].voteCount++;
        hasVoted[msg.sender] = true;
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function getWinner()
        public
        view
        returns (string memory winnerName, uint256 winningVotes)
    {
        uint256 winnerIndex = 0;

        for (uint256 i = 1; i < candidates.length; i++) {
            if (candidates[i].voteCount > candidates[winnerIndex].voteCount) {
                winnerIndex = i;
            }
        }

        return (
            candidates[winnerIndex].name,
            candidates[winnerIndex].voteCount
        );
    }
}