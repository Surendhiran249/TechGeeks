// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Charity {
    struct Donation {
        address donor;
        uint256 amount;
        string name;
        string method;
    }

    Donation[] public donations;

    // Donate and store donation details
    function donate(string memory name, string memory method) public payable {
        donations.push(Donation(msg.sender, msg.value, name, method));
    }

    // Get total donations in wei
    function getTotalDonations() public view returns (uint256) {
        uint256 total = 0;
        for (uint256 i = 0; i < donations.length; i++) {
            total += donations[i].amount;
        }
        return total;
    }

    // Get all donors
    function getAllDonors() public view returns (address[] memory) {
        address[] memory donors = new address[](donations.length);
        for (uint256 i = 0; i < donations.length; i++) {
            donors[i] = donations[i].donor;
        }
        return donors;
    }

    // Get donation history of a specific address
    function getDonationHistory(address donor) public view returns (uint256[] memory) {
        uint256 count = 0;

        // Count donations for the address
        for (uint256 i = 0; i < donations.length; i++) {
            if (donations[i].donor == donor) {
                count++;
            }
        }

        // Populate donation amounts for the address
        uint256[] memory amounts = new uint256[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < donations.length; i++) {
            if (donations[i].donor == donor) {
                amounts[index] = donations[i].amount;
                index++;
            }
        }

        return amounts;
    }

    // Get the total number of donations
    function getDonationCount() public view returns (uint256) {
        return donations.length;
    }
}
