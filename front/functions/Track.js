import { ethers, JsonRpcProvider } from "ethers";
import SmartContract from '../smart-contracts.json';

let provider = new JsonRpcProvider("http://127.0.0.1:8545");

function dateAndTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}
  

export async function obtenerEventos(_etiqueta) {
  const SC = SmartContract.find(c => c.name === "Trazabilidad")
  const contractAdd = SC.address
  const contractAbi = SC.abi
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(contractAdd, contractAbi, provider)
  
  const tx = await contract.obtenerEventos(_etiqueta)
  const eventos = tx.map(res => {
      const time = Number(res[0].toString())
      const data = {
          timeStamp: time,
          date: dateAndTime(time),
          address: res[1],
          signature: res[2]
      }
      return data
  })    
  return eventos
}