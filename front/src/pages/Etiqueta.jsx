import { useState } from "react";
import { agregarEvento, agregarEventosBatch } from "../../functions/Etiquetas"
import { ethers } from "ethers"

export default function Etiqueta() {
    const [etiqueta, setEtiqueta] = useState("");
    const [uploadedFile, setUploadedFile] = useState();
    const [response, setResponse] = useState("")
    const [responseTwo, setResponseTwo] = useState("")
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        await agregarEvento(signer, etiqueta);
        // Handle success, maybe show a success message or redirect the user
        setResponse(`La etiqueta ha sido añadida!`)
      } catch (error) {
        // Handle error, show an error message to the user
        console.error("Error:", error);
      }
    };
  
    const handleFileChange = (event) => {
      setUploadedFile(event.target.files[0]);
    };
  
    const handleFileSubmit = async (event) => {
      event.preventDefault();
  
      if (!uploadedFile) {
        console.error("No file uploaded");
        return;
      }
  
      const reader = new FileReader();
      reader.onload = async function(e) {
        try {
          const etiquetas = JSON.parse(e.target.result);
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          await agregarEventosBatch(signer, etiquetas);
          setResponseTwo("Las etiquetas han sido añadidas!")
        } catch (error) {
          console.error("Error parsing or submitting:", error);
        }
      };
      reader.readAsText(uploadedFile);
    };
  
    return (
      <div className="organization">
        <h1>Etiqueta</h1>
        <form onSubmit={handleSubmit} className="organization-form">
          <div className="input-group">
            <label>Código:</label>
            <input
              type="text"
              value={etiqueta}
              onChange={(e) => setEtiqueta(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">Añadir</button>
        </form>
        {response && <div className="response">
          {response}
        </div>}
  
        <h2>Múltiples etiquetas</h2>
        <form onSubmit={handleFileSubmit} className="organization-form">
          <div className="input-group">
            <label>Subir fichero JSON:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="submit" className="submit-btn">Añadir</button>
        </form>
        {responseTwo && <div className="response">
          {responseTwo}
        </div>}
      </div>
    );
}