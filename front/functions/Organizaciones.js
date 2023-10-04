import { ethers, JsonRpcProvider } from "ethers";
import SmartContract from '../smart-contracts.json';

import networkConfig from '../json-rpc-url.json';

let provider = new ethers.JsonRpcProvider(networkConfig.url);


// const pKey =
//   "0x5f90db02959464e48257b9bfb20ae3bf475dce5b984951a4d1c3b126de09e369";
// const wallet = new ethers.Wallet(pKey, provider);



// const provider = new ethers.BrowserProvider(window.ethereum);
// const signer = await provider.getSigner();

export async function registrarOrg(_address, _nombre, _estado) {
  const SC = SmartContract.find(c => c.name === "Trazabilidad")
  const contractAdd = SC.address
  const contractAbi = SC.abi
  const contract = new ethers.Contract(contractAdd, contractAbi, _address);
  const tx = await contract.registrarOrganizacion(_nombre, _estado)
    
  return console.log(tx)
}