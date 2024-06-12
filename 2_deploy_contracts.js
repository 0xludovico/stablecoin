const Stablecoin = artifacts.require("SARS");

module.exports = function(deployer) {
  const initialSupply = web3.utils.toWei('1000000', 'ether'); // 1 millón de tokens iniciales
  deployer.deploy(Stablecoin, initialSupply);
};
