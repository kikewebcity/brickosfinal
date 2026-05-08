import React, { useState } from 'react';

const Calculadora = () => {
  // 1. ESTADO DE LAS VARIABLES
  const [ancho, setAncho] = useState(1.0);
  const [alto, setAlto] = useState(1.0);

  // 2. LÓGICA DE CÁLCULO
  const RENDIMIENTO_M2 = 15; 
  const COSTO_UNITARIO = 15; 

  const area = ancho * alto;
  const brickosTotales = Math.round(area * RENDIMIENTO_M2); 
  const costoTotal = brickosTotales * COSTO_UNITARIO;

  // 3. ENLACE DINÁMICO DE WHATSAPP
  const mensajeWA = `Hola, me interesa adquirir ${brickosTotales} Brickos para mi proyecto. El costo estimado es de $${costoTotal} pesos.`;
  const urlWA = `https://wa.me/525512306218?text=${encodeURIComponent(mensajeWA)}`;

  return (
    <div className="calc-main-layout">
      <div className="calc-dark-panel">
        <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px', fontFamily: 'var(--font-main)', textTransform: 'none', fontSize: '1.8rem' }}>
          Calculo el material que requieres para tu proyecto
        </h3>
        
        <div className="calc-sliders-container">
          <div className="slider-col">
            <div className="slider-bubble">{ancho.toFixed(1)} m</div>
            <input type="range" min="0.5" max="10" step="0.1" value={ancho} onChange={(e) => setAncho(parseFloat(e.target.value))} className="custom-range" />
            <span className="slider-label">Ancho de pared</span>
          </div>
          <div className="slider-col">
            <div className="slider-bubble">{alto.toFixed(1)} m</div>
            <input type="range" min="0.5" max="5" step="0.1" value={alto} onChange={(e) => setAlto(parseFloat(e.target.value))} className="custom-range" />
            <span className="slider-label">Alto de pared</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#114a1a', border: '2px solid var(--color-green)', borderRadius: '50px', padding: '20px 40px', textAlign: 'center', width: '85%' }}>
            <span style={{ display: 'block', color: '#fff', fontSize: '1.2rem' }}>Necesitas</span>
            <strong style={{ display: 'block', color: '#fff', fontSize: '3.5rem', fontFamily: 'var(--font-main)' }}>{brickosTotales}</strong>
            <span style={{ display: 'block', color: 'var(--color-green)', fontSize: '1.2rem', fontWeight: 'bold' }}>Brickos</span>
          </div>
          <div style={{ backgroundColor: 'transparent', border: '2px solid var(--color-green)', borderRadius: '50px', padding: '15px 40px', textAlign: 'center', width: '85%' }}>
            <strong style={{ color: '#fff', fontSize: '1.4rem' }}>
              Costo: <span style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>${costoTotal}</span> pesos
            </strong>
          </div>
        </div>

        <div style={{ color: '#ffffff', fontSize: '0.95rem', textAlign: 'center', marginBottom: '20px', fontFamily: 'var(--font-text)', fontStyle: 'italic', opacity: 1 }}>
          Te vendemos solo el material que necesitas
        </div>

        <a href={urlWA} target="_blank" rel="noopener noreferrer" className="calc-cta">
          Agregar al carrito
        </a>
      </div>

      <div className="calc-image-panel" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/ladrillodivisorio.png" 
          alt="Muro Bricko" 
          style={{ maxWidth: '100%', height: 'auto' }} 
        />
        {/* Se eliminó la etiqueta <p> vacía que generaba la mancha visual */}
      </div>
    </div>
  );
};

export default Calculadora;
