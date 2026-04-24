import React, { useState } from 'react';

const Calculadora = () => {
  // 1. ESTADO DE LAS VARIABLES
  const [ancho, setAncho] = useState(1.0);
  const [alto, setAlto] = useState(1.0);

  // 2. LÓGICA DE CÁLCULO (15 unidades por m2 / Redondeo estándar)
  const area = ancho * alto;
  const brickosTotales = Math.round(area * 15); 
  const costoTotal = brickosTotales * 14;

  // 3. ENLACE DINÁMICO DE WHATSAPP
  const mensajeWA = `Hola, me interesa adquirir ${brickosTotales} Brickos para mi proyecto. El costo estimado es de $${costoTotal} pesos.`;
  const urlWA = `https://wa.me/525555555555?text=${encodeURIComponent(mensajeWA)}`;

  return (
    <div className="calc-main-layout">
      {/* PANEL DE CONTROL: CÁLCULO DE MURO */}
      <div className="calc-dark-panel" style={{ backgroundColor: '#0a0a0a' }}>
        <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px', fontFamily: 'var(--font-main)', letterSpacing: '1px' }}>
          CÁLCULO DE MURO
        </h3>
        
        <div className="calc-sliders-container">
          <div className="slider-col">
            <div className="slider-bubble">{ancho.toFixed(1)} m</div>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={ancho}
              onChange={(e) => setAncho(parseFloat(e.target.value))}
              className="custom-range"
            />
            <span className="slider-label">Ancho de pared</span>
          </div>

          <div className="slider-col">
            <div className="slider-bubble">{alto.toFixed(1)} m</div>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={alto}
              onChange={(e) => setAlto(parseFloat(e.target.value))}
              className="custom-range"
            />
            <span className="slider-label">Alto de pared</span>
          </div>
        </div>

        {/* INDICADORES DE RESULTADO */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
          
          <div style={{ backgroundColor: '#114a1a', border: '2px solid var(--color-green)', borderRadius: '50px', padding: '20px 40px', textAlign: 'center', width: '85%' }}>
            <span style={{ display: 'block', color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-text)' }}>Necesitas</span>
            <strong style={{ display: 'block', color: '#fff', fontSize: '3.5rem', fontFamily: 'var(--font-main)', lineHeight: '1' }}>{brickosTotales}</strong>
            <span style={{ display: 'block', color: 'var(--color-green)', fontSize: '1.2rem', fontWeight: 'bold' }}>Brickos</span>
          </div>

          <div style={{ backgroundColor: 'transparent', border: '2px solid var(--color-green)', borderRadius: '50px', padding: '15px 40px', textAlign: 'center', width: '85%' }}>
            <strong style={{ color: '#fff', fontSize: '1.4rem', fontFamily: 'var(--font-text)', fontWeight: '500' }}>
              Costo: <span style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>${costoTotal}</span> pesos
            </strong>
          </div>
        </div>

        <a href={urlWA} target="_blank" rel="noopener noreferrer" className="calc-cta">
          Agregar al carrito
        </a>
      </div>

      {/* PANEL DE INFORMACIÓN Y POLÍTICA */}
      <div className="calc-image-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/ladrillodivisorio.webp" alt="Muro Bricko" style={{ maxWidth: '100%', height: 'auto', marginBottom: '25px' }} />
        <p style={{ fontFamily: 'var(--font-text)', fontSize: '0.95rem', color: '#1a1a1a', textAlign: 'justify', maxWidth: '90%', lineHeight: '1.6', backgroundColor: '#f4f4f4', padding: '20px', borderLeft: '4px solid var(--color-green)', borderRadius: '4px' }}>
          <strong>Te vendemos solo el material que necesitas.</strong> Si te sobran piezas completas, nos las traes y te <strong>DEVOLVEMOS</strong> el dinero equivalente a su costo.
        </p>
      </div>
    </div>
  );
};

export default Calculadora;

  