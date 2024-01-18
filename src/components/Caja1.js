import React, { useState } from 'react';
import '../style/Caja1.css'; // Asegúrate de tener un archivo CSS para el estilo

const App = () => {
  const [meta, setMeta] = useState('');
  const [metas, setMetas] = useState([]);
  const [completados, setCompletados] = useState(0);
  const [pendientes, setPendientes] = useState(0);

  const agregarMeta = () => {
    if (meta.trim() !== '') {
      setMetas([...metas, meta]);
      setMeta('');
      setPendientes(pendientes + 1);
    }
  };

  const eliminarMeta = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas.splice(index, 1);
    setMetas(nuevasMetas);

    // Actualizar contadores
    setPendientes(pendientes - 1);
    setCompletados(completados + 1);
  };

  return (
    <div className="app">
      <h1 className="titulo">MIS METAS</h1>
      <div className="contenedor-meta">
        <input
          type="text"
          value={meta}
          onChange={(e) => setMeta(e.target.value)}
          placeholder="Escribe tu meta aquí"
        />
        <button onClick={agregarMeta}>Agregar</button>
      </div>
      <div className="lista-metas">
        {metas.map((meta, index) => (
          <div key={index} className="meta">
            <p>{meta}</p>
            <button onClick={() => eliminarMeta(index)}>Eliminar</button>
          </div>
        ))}
      </div>
      <div className="contadores">
        <p>Completados: {completados}</p>
        <p>Pendientes: {pendientes}</p>
      </div>
    </div>
  );
};

export default App;
