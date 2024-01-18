import './App.css';
import React, { useState } from 'react';
import C1Image from './Iconos/C1.png';
import C2Image from './Iconos/C2.png';


function App() {
  const [meta, setMeta] = useState('');
  const [contador1, setContador1] = useState(0);
  const [metas, setMetas] = useState([]);

  const handleInputChange = (e) => {
    setMeta(e.target.value);
  };

  const agregarMeta = () => {
    setContador1(contador1 + 1);
    setMetas([...metas, { texto: meta, completa: false }]);
    setMeta('');
  };

  const marcarCompleta = (index) => {
    const nuevasMetas = [...metas];
    nuevasMetas[index].completa = !nuevasMetas[index].completa;
    setMetas(nuevasMetas);
  };

  return (
    <div className="App">
      <main>
        <h1>Mis Metas</h1>
        <div>
          <input type="text" placeholder="Nueva meta..." value={meta} onChange={handleInputChange} />
          <button onClick={agregarMeta}>Agregar</button>
        </div>
        <div className='contenedores'>
          <p className='p1'>Completas: </p>
          <p className='p2'>Pendiente: {contador1}</p>
          {metas.map((m, index) => (
            <p key={index} className={m.completa ? 'completa' : ''}>
              {m.texto}
              <img
                src={C2Image}
                alt='Icono 1'
                id=''
                onClick={() => marcarCompleta(index)}
                className={m.completa ? 'marcada' : ''}
              />
              <img src={C1Image} alt='Icono 2' id='' />
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;