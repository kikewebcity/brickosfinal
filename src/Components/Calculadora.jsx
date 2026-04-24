import React, { useState } from 'react';

const Calculadora = () => {
  // 1. ESTADO DE LAS VARIABLES (Por defecto 1.0m como en el mockup)
  const [ancho, setAncho] = useState(1.0);
  const [alto, setAlto] = useState(1.0);

  // 2. LÓGICA MATEMÁTICA ESTRICTA (Requerimiento del Cliente)
  const area = ancho * alto;
  // Multiplicación por 15 piezas por m2 y redondeo estándar a entero
  const brickosTotales = Math.round(area * 15); 
  // Costo por unidad: 14 pesos
  const costoTotal = brickosTotales * 14;

  // 3. GENERACIÓN DINÁMICA DE ENLACE WA
  const mensajeWA = `Hola, me interesa adquirir ${brickosTotales} Brickos para mi proyecto. El costo estimado de la calculadora es de $${costoTotal} pesos.`;
  const urlWA = `https://wa.me/525555555555?text=${encodeURIComponent(mensajeWA)}`;

  return (
    <div className="calc-main-layout">
      {/* PANEL IZQUIERDO: CONTROLES TÉCNICOS */}
      <div className="calc-dark-panel" style={{ backgroundColor: '#0a0a0a' }}>
        
        {/* CONTROLES DE RANGO (SLIDERS) */}
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

        {/* ÁREA DE RESULTADOS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
          
          {/* RESULTADO 1: CANTIDAD */}
          <div 
            style={{
              backgroundColor: '#114a1a', /* Verde oscuro tipo mockup */
              border: '2px solid var(--color-green)',
              borderRadius: '50px',
              padding: '20px 40px',
              textAlign: 'center',
              width: '80%'
            }}
          >
            <span style={{ display: 'block', color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-text)' }}>
              Necesitas
            </span>
            <strong style={{ display: 'block', color: '#fff', fontSize: '3.5rem', fontFamily: 'var(--font-main)', lineHeight: '1' }}>
              {brickosTotales}
            </strong>
            <span style={{ display: 'block', color: 'var(--color-green)', fontSize: '1.2rem', fontWeight: 'bold' }}>
              Brickos
            </span>
          </div>

          {/* RESULTADO 2: COSTO */}
          <div 
            style={{
              backgroundColor: 'transparent',
              border: '2px solid var(--color-green)',
              borderRadius: '50px',
              padding: '15px 40px',
              textAlign: 'center',
              width: '80%'
            }}
          >
            <strong style={{ color: '#fff', fontSize: '1.4rem', fontFamily: 'var(--font-text)', fontWeight: '500' }}>
              Costo: <span style={{ color: 'var(--color-green)', fontWeight: 'bold' }}>{costoTotal}</span> pesos
            </strong>
          </div>
        </div>

        {/* CALL TO ACTION (CTA) TRANSSACCIONAL */}
        <a 
          href={urlWA} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="calc-cta"
        >
          Agregar al carrito
        </a>
      </div>

      {/* PANEL DERECHO: VISUALIZACIÓN Y POLÍTICA DE RETORNO */}
      <div className="calc-image-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src="/ladrillodivisorio.webp" 
          alt="Muro Bricko" 
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} 
        />
        
        {/* LEYENDA LEGAL Y OPERATIVA */}
        <p style={{ 
          fontFamily: 'var(--font-text)', 
          fontSize: '0.95rem', 
          color: '#1a1a1a', 
          textAlign: 'justify', 
          maxWidth: '90%', 
          lineHeight: '1.6',
          backgroundColor: '#f4f4f4',
          padding: '15px',
          borderLeft: '4px solid var(--color-green)',
          borderRadius: '4px'
        }}>
          <strong>Te vendemos solo el material que necesitas.</strong> Si te sobran piezas completas, nos las traes y te <strong>DEVOLVEMOS</strong> el dinero equivalente a su costo.
        </p>
      </div>
    </div>
  );
};

export default Calculadora;

