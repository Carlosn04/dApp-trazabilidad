require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");
const path = require('path');
const { task } = require("hardhat/config");

task("set-network", "Sets the network for the front-end")
.addOptionalParam("netname", "The network to set (default: localhost)")
.setAction(async (taskArgs) => {
  const { netname } = taskArgs;

  let url;
  switch (netname) {
    case 'ganache':
      url = "http://127.0.0.1:7545";
      break;
    default:
      url = "http://127.0.0.1:8545";
  }

  const outputData = {
    url
  };

  const outputPath = path.join(__dirname, '..', 'front', 'json-rpc-url.json');
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
});

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
