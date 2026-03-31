import React, { useState, useEffect } from 'react';
import { LayoutGrid, Square, Columns } from 'lucide-react';

const Calculadora = () => {
  const [tipo, setTipo] = useState('muro');
  const [ancho, setAncho] = useState(4.5);
  const [alto, setAlto] = useState(3.0);
  const [total, setTotal] = useState(0);

  const imagenesEstructura = {
    muro: '/muro.png',
    barra: '/barra.png',
    columna: '/columna.png',
  };

  useEffect(() => {
    const factor = tipo === 'barra' ? 2 : tipo === 'columna' ? 1.5 : 1;
    const area = (parseFloat(ancho) || 0) * (parseFloat(alto) || 0);
    const calculo = Math.ceil(area * 50 * factor);
    setTotal(calculo);
  }, [ancho, alto, tipo]);

  return (
    <div className="calc-main-layout">
      {/* PANEL OSCURO DE CONTROL */}
      <div className="calc-dark-panel">
        <div className="calc-type-selector">
          <button
            onClick={() => setTipo('muro')}
            className={`type-btn ${tipo === 'muro' ? 'active' : ''}`}
          >
            <LayoutGrid size={32} />
            <span>Muro</span>
          </button>
          <button
            onClick={() => setTipo('barra')}
            className={`type-btn ${tipo === 'barra' ? 'active' : ''}`}
          >
            <Square size={32} />
            <span>Barra/Isla</span>
          </button>
          <button
            onClick={() => setTipo('columna')}
            className={`type-btn ${tipo === 'columna' ? 'active' : ''}`}
          >
            <Columns size={32} />
            <span>Columna</span>
          </button>
        </div>

        <div className="calc-sliders-container">
          <div className="slider-col">
            <div className="slider-bubble">{ancho} m</div>
            <input
              type="range"
              min="1"
              max="15"
              step="0.1"
              value={ancho}
              onChange={(e) => setAncho(e.target.value)}
              className="custom-range"
            />
            <span className="slider-label">Ancho de Pared</span>
          </div>
          <div className="slider-col">
            <div className="slider-bubble">{alto} m</div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={alto}
              onChange={(e) => setAlto(e.target.value)}
              className="custom-range"
            />
            <span className="slider-label">Alto de Pared</span>
          </div>
        </div>

        <div className="calc-result-pill">
          {total} <span>BRICKOS ESTIMADOS.</span>
        </div>

        <button className="calc-cta">Agregar a carrito</button>
      </div>

      {/* PANEL DE IMAGEN DINÁMICA */}
      <div className="calc-image-panel">
        <img
          src={imagenesEstructura[tipo]}
          alt={`Visualización de ${tipo}`}
          onError={(e) => {
            e.target.src = '/muro.png';
          }}
        />
      </div>
    </div>
  );
};

export default Calculadora;
