// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Charity {
    struct Donation {
        address donor;
        uint256 amount;
    }

    Donation[] public donations;

    function donate() public payable {
        donations.push(Donation(msg.sender, msg.value));
    }

    function getTotalDonations() public view returns (uint256) {
        uint256 total = 0;
        for (uint256 i = 0; i < donations.length; i++) {
            total += donations[i].amount;
        }
        return total;
    }
}
