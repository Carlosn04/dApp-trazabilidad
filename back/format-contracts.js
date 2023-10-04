const path = require("path");
const fs = require("fs")

const artifactsPath = "./artifacts/contracts";
const outputPath = "./smart-contracts.json"

async function formatSmartContracts() {
  let contractsData = []

  try {
    const dirs = await fs.promises.readdir(artifactsPath);

    for (const dir of dirs) {
      const dirPath = path.join(artifactsPath, dir);
      if ((await fs.promises.stat(dirPath)).isDirectory()) {
        // Get all files in the directory
        const filesInDir = await fs.promises.readdir(dirPath);

        // Filter for only .json files (assuming you have only one .json per contract directory)
        const jsonFiles = filesInDir.filter(file => path.extname(file) === '.json' && !file.includes('.dbg'));

        if (jsonFiles.length > 0) {
          const jsonFilePath = path.join(dirPath, jsonFiles[0]);
          const contractData = JSON.parse(await fs.promises.readFile(jsonFilePath, 'utf8'));
          contractsData.push({
              name: jsonFiles[0].split('.')[0],  // Assuming the naming format is number_ContractName.sol
              address: "",
              abi: contractData.abi
          });
        }
      }
    }

    await fs.promises.writeFile(outputPath, JSON.stringify(contractsData, null, 2));

  } catch (error) {
    console.error("Error creating the format:", error);
  }
}

function writeAddress(name, address) {
  if (!fs.existsSync(outputPath)) return console.log("File doesn't exists!")
  const contractsData = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
  contractsData.find(contract => contract.name === name).address = address
  fs.writeFileSync(outputPath, JSON.stringify(contractsData, null, 2));   
}

formatSmartContracts();

module.exports = { writeAddress }