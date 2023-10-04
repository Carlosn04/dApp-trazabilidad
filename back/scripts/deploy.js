const hre = require("hardhat");
const { writeAddress } = require("../format-contracts")

async function main() {
  const contract = await hre.ethers.deployContract("Trazabilidad", [])

  const contractDeploy = await contract.waitForDeployment();
  const contractAdd = contractDeploy.target
  writeAddress("Trazabilidad", contractAdd)
  console.log('The contract address is: ', contractAdd)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
