import React from 'react';
import '../App.css';

// 1. Importación de activos visuales
import logobrickoColor from '../assets/logobricko.png'; 
import iconoreciclaje from '../assets/iconoreciclaje.png';
import inovacion from '../assets/inovacion.png';
import confianza from '../assets/confianza.png';

const Nosotros = () => {
  return (
    <div className="nosotros-pagina">
      
      {/* SECCIÓN 1: BANNER CON LOGO Y SLOGAN */}
      <section className="nosotros-banner-moderno">
        <div className="nosotros-banner-grid">
          <div className="nosotros-caja-logo">
            <img src={logobrickoColor} alt="Logo Bricko" className="nosotros-logo-color" />
          </div>
          <div className="nosotros-caja-texto">
            <div className="nosotros-fondo-verde-acento"></div>
            <p className="nosotros-texto-formal" style={{ textTransform: 'none' }}>
              Nuestro slogan, <strong>La revolución ecológica en construcción</strong>, 
              encapsula nuestra misión de transformar la industria mediante prácticas 
              innovadoras y productos eco amigables. En bricko, estamos comprometidos a 
              liderar un cambio hacia métodos de construcción más sostenibles y responsables.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: MANIFIESTO DE IMPACTO (SENTENCE CASE) */}
      <section className="nosotros-manifiesto">
        <div className="manifiesto-contenedor">
          <h2 className="manifiesto-texto" style={{ textTransform: 'none' }}>
            En bricko no solo vendemos bloques, representamos también soluciones 
            que contribuyen al mejoramiento de la vida de los ecosistemas terrestres 
            y a la construcción de ciudades sustentables.
          </h2>
        </div>
      </section>

      {/* SECCIÓN 3: NARRATIVA EN ZIGZAG */}
      <section className="nosotros-zigzag-contenedor">
        
        {/* Quiénes somos */}
        <div className="zigzag-fila">
          <div className="zigzag-texto">
            <p className="zigzag-parrafo" style={{ textTransform: 'none' }}>
              <span className="text-highlight">Somos una empresa 100% mexicana</span>, 
              que se distingue como una marca dedicada a la fabricación de productos 
              innovadores para la construcción sostenible.
            </p>
          </div>
          <div className="zigzag-imagen">
            <img src="/oficina.webp" alt="Oficina con Bricko" />
          </div>
        </div>

        {/* Misión */}
        <div className="zigzag-fila reversa">
          <div className="zigzag-texto">
            <h2 className="zigzag-titulo" style={{ textTransform: 'none' }}>Misión</h2>
            <p className="zigzag-parrafo" style={{ textTransform: 'none' }}>
              Proporcionar soluciones constructivas de alta calidad que minimicen el impacto ambiental, 
              fomentando la economía circular y ofreciendo alternativas estéticas y funcionales.
            </p>
          </div>
          <div className="zigzag-imagen">
            <img src="/recamara.webp" alt="Recámara con acabados Bricko" />
          </div>
        </div>

        {/* Visión */}
        <div className="zigzag-fila">
          <div className="zigzag-texto">
            <h2 className="zigzag-titulo" style={{ textTransform: 'none' }}>Visión</h2>
            <p className="zigzag-parrafo" style={{ textTransform: 'none' }}>
              Ser el referente nacional en materiales de construcción eco-sustentables, 
              liderando la transición hacia ciudades más verdes y espacios habitables.
            </p>
          </div>
          <div className="zigzag-imagen">
            <img src="/banop.webp" alt="Baño con muro Bricko" />
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: VALORES CON IMÁGENES (OPTIMIZADO PARA MOBILE) */}
      <section className="nosotros-valores">
        <h2 className="titulo-seccion-limpio" style={{ textTransform: 'none' }}>
          Nuestros <span className="enfasis-verde">valores</span>
        </h2>
        
        <div className="valores-grid">
          {/* Sustentabilidad */}
          <div className="valor-card">
            <div className="valor-icono-wrapper">
              <img src={iconoreciclaje} alt="Sustentabilidad" className="valor-icono" />
            </div>
            <h3 style={{ textTransform: 'none' }}>Sustentabilidad</h3>
            <p>Cada decisión que tomamos prioriza la salud del planeta.</p>
          </div>

          {/* Innovación */}
          <div className="valor-card">
            <div className="valor-icono-wrapper">
              <img src={inovacion} alt="Innovación" className="valor-icono" />
            </div>
            <h3 style={{ textTransform: 'none' }}>Innovación</h3>
            <p>Buscamos constantemente nuevas formas de reciclar y construir.</p>
          </div>

          {/* Calidad */}
          <div className="valor-card">
            <div className="valor-icono-wrapper">
              <img src={confianza} alt="Calidad" className="valor-icono" />
            </div>
            <h3 style={{ textTransform: 'none' }}>Calidad</h3>
            <p>La ecología no debe sacrificar la resistencia ni la estética.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;
