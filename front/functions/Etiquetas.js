import { ethers, JsonRpcProvider } from "ethers";
import SmartContract from '../smart-contracts.json';

import networkConfig from '../json-rpc-url.json';

let provider = new ethers.JsonRpcProvider(networkConfig.url);


// const pKey =
//   "0x5f90db02959464e48257b9bfb20ae3bf475dce5b984951a4d1c3b126de09e369";
// const wallet = new ethers.Wallet(pKey, provider);



// const provider = new ethers.BrowserProvider(window.ethereum);
// const signer = await provider.getSigner();

export async function agregarEvento(_address, _etiqueta) {
  const SC = SmartContract.find(c => c.name === "Trazabilidad")
  const contractAdd = SC.address
  const contractAbi = SC.abi
  const contract = new ethers.Contract(contractAdd, contractAbi, _address);
  const tx = await contract.agregarEvento(_etiqueta)
    
  return console.log(tx)
}

export async function agregarEventosBatch(_address, _etiquetas) {
  const SC = SmartContract.find(c => c.name === "Trazabilidad")
  const contractAdd = SC.address
  const contractAbi = SC.abi
  const contract = new ethers.Contract(contractAdd, contractAbi, _address);
  const tx = await contract.agregarEventosBatch(_etiquetas)
    
  return console.log(tx)
}