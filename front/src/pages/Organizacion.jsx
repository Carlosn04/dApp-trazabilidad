import { useState } from "react";
import { registrarOrg } from "../../functions/Organizaciones"
import { ethers } from "ethers"

export default function Organizacion() {
  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState("");
  const [response, setResponse] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log(estado, nombre)
      await registrarOrg(signer, nombre, estado);
      // Handle success, maybe show a success message or redirect the user
      setResponse(`La empresa ${nombre} ha sido creada!`)
    } catch (error) {
      // Handle error, show an error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <div className="organization">
      <h1>Registro</h1>
      <form onSubmit={handleSubmit} className="organization-form">
        <div className="input-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Función:</label>
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="0">Productor</option>
            <option value="1">Almacén</option>
            <option value="2">Mayorista</option>
            <option value="3">Minorista</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Registrar Organización</button>
      </form>
      {response && <div className="response">
          {response}
        </div>}
    </div>
  );
}