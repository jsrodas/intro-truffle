const Counter = artifacts.require("Counter");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Counter", function (/* accounts */) {
  it("should assert true", async function () {
    await Counter.deployed();
    return assert.isTrue(true);
  });
});
