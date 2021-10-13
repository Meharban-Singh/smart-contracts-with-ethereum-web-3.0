// SPDX-License-Identifier: UNLICENSED

//compiler
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("This is a smart contract");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender); // msg.sender is the wallet address of the person calling the contract function
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}