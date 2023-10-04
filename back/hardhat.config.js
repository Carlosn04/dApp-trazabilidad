require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
    },
    localhost: {
      initialBaseFeePerGas: 0,
      url: "http://127.0.0.1:8545"
    }
  }
};
