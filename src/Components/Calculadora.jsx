import React, { useState } from 'react';

const Calculadora = () => {
  // 1. VARIABLES DE ESTADO: DIMENSIONES
  const [ancho, setAncho] = useState(1.0);
  const [alto, setAlto] = useState(1.0);

  // 2. PARÁMETROS TÉCNICOS Y LÓGICA DE CÁLCULO
  const RENDIMIENTO_M2 = 15; // Unidades por metro cuadrado
  const COSTO_UNITARIO = 15; // Precio en pesos por unidad

  const area = ancho * alto;
  const brickosTotales = Math.round(area * RENDIMIENTO_M2); 
  const costoTotal = brickosTotales * COSTO_UNITARIO;

  // 3. CONFIGURACIÓN DE MENSAJERÍA DINÁMICA
  const mensajeWA = `Hola, me interesa adquirir ${brickosTotales} Brickos para mi proyecto. El costo estimado es de $${costoTotal} pesos.`;
  const urlWA = `https://wa.me/525555555555?text=${encodeURIComponent(mensajeWA)}`;

  return (
    <div className="calc-main-layout">
      {/* PANEL PRIMARIO: MÓDULO DE ENTRADA Y RESULTADOS */}
      <div className="calc-dark-panel" style={{ backgroundColor: '#0a0a0a' }}>
        {/* ENCABEZADO: Gramática ajustada a formato de oración */}
        <h3 style={{ 
          color: '#fff', 
          textAlign: 'center', 
          marginBottom: '30px', 
          fontFamily: 'var(--font-main)', 
          textTransform: 'none', 
          fontSize: '1.8rem',
          letterSpacing: '0.5px' 
        }}>
          Calculo el material que requieres para tu proyecto
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

        {/* INDICADORES CUANTITATIVOS */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          
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

        {/* LEYENDA COMERCIAL: Formato en minúsculas y cursiva */}
        <p style={{ 
          color: '#eaeded', 
          fontSize: '0.95rem', 
          textAlign: 'center', 
          marginBottom: '20px', 
          fontFamily: 'var(--font-text)', 
          fontStyle: 'italic',
          textTransform: 'lowercase'
        }}>
          te vendemos solo el material que necesitas
        </p>

        <a href={urlWA} target="_blank" rel="noopener noreferrer" className="calc-cta">
          Agregar al carrito
        </a>
      </div>

      {/* PANEL SECUNDARIO: INFORMACIÓN DE POLÍTICAS OPERATIVAS */}
      <div className="calc-image-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/ladrillodivisorio.webp" alt="Muro Bricko" style={{ maxWidth: '100%', height: 'auto', marginBottom: '25px' }} />
        <p style={{ 
          fontFamily: 'var(--font-text)', 
          fontSize: '0.95rem', 
          color: '#1a1a1a', 
          textAlign: 'justify', 
          maxWidth: '90%', 
          lineHeight: '1.6', 
          backgroundColor: '#f4f4f4', 
          padding: '20px', 
          borderLeft: '4px solid var(--color-green)', 
          borderRadius: '4px' 
        }}>
          <strong>Política de Cero Mermas.</strong> Si te sobran piezas completas, nos las traes y te <strong>DEVOLVEMOS</strong> el dinero equivalente a su costo.
        </p>
      </div>
    </div>
  );
};

export default Calculadora;


