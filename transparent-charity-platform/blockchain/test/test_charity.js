const Charity = artifacts.require("Charity");

contract("Charity", (accounts) => {
    it("should accept donations", async () => {
        const charity = await Charity.deployed();
        await charity.donate({ from: accounts[0], value: web3.utils.toWei("1", "ether") });

        const total = await charity.getTotalDonations();
        assert.equal(total, web3.utils.toWei("1", "ether"), "Total donations should be 1 ether");
    });
});
