
contract("SBT", () => {
    let soul = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
    let soulData = ("me", "wwww.google.com", "1", "14:28")

    it('should be a mintable', async function () {
        const contractInstance = await SBT.new();
        const result = await contractInstance.mint(soul,soulData );
        assert.equal(result.receipt.status, true);

      });
})
