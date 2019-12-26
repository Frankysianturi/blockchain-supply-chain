var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "siege disagree message lake agree between walk confirm engage survey chicken become";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/a1412f8cdd3b480e89240786aed2eb1a");
      },
      network_id: 4,
      gas: 6721975,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.6.0"
    }
  }
};