var Counter = artifacts.require("Counter");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Counter);
};