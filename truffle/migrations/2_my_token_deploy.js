const MyToken = artifacts.require("MyToken");

module.exports = async function (deployer, network, accounts) {
  // Obtén la cuenta que usaremos como `initialOwner`
  console.log("Hello");
  console.log("Hello: " + accounts[0]);
  const initialOwner = accounts[0];

  // Despliega el contrato usando `deployer.deploy()`
  await deployer.deploy(MyToken, initialOwner);
};

