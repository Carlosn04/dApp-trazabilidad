import { useState } from "react";
import { obtenerEventos } from "../../functions/Track";

function truncate(str, maxLength = 6) {
  return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
}

export default function Track() {
  const [etiqueta, setEtiqueta] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const track = await obtenerEventos(etiqueta);
      setResponse(track);
    } catch (error) {
      // Handle error, show an error message to the user
      console.error("Error:", error);
    }
  };

  return (
    <div className="organization">
      <h1>Seguimiento</h1>
      <form onSubmit={handleSubmit} className="organization-form">
        <div className="input-group">
          <label>Código:</label>
          <input
            type="text"
            value={etiqueta}
            onChange={(e) => setEtiqueta(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Buscar
        </button>
      </form>
      {response && (
        <div className="response">
          <h2>Eventos</h2>
          {response.map((item, index) => (
            <table key={index}>
              {index === 0 && (
                <thead>
                  <tr>
                    
                    <th>Date</th>
                    <th>Address</th>
                  </tr>
                </thead>
              )}
              <tbody>
                <tr>
                  
                  <td>{item.date}</td>
                  <td>{truncate(item.address)}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
}
