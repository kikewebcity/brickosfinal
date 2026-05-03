import React from 'react';
import '../App.css';
import logobrickoColor from '../assets/logobricko.png'; 

const Nosotros = () => {
  return (
    <div className="nosotros-pagina">
      {/* SECCIÓN 1: BANNER CON LOGO Y SLOGAN */}
      <section className="nosotros-banner-moderno">
        <div className="nosotros-banner-grid">
          <div className="nosotros-caja-logo">
            <img src={logobrickoColor} alt="Logo Bricko Original" className="nosotros-logo-color" />
          </div>
          <div className="nosotros-caja-texto">
            <div className="nosotros-fondo-verde-acento"></div>
            <p className="nosotros-texto-formal">
              Nuestro slogan, <strong>La Revolución Ecológica en Construcción</strong>, 
              encapsula nuestra misión de transformar la industria mediante prácticas 
              innovadoras y productos eco amigables. En Bricko, estamos comprometidos a 
              liderar un cambio hacia métodos de construcción más sostenibles y responsables.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: NARRATIVA EN ZIGZAG */}
      <section className="nosotros-zigzag-contenedor">
        
        {/* FILA 1: QUIÉNES SOMOS */}
        <div className="zigzag-fila">
          <div className="zigzag-texto">
            <p className="zigzag-parrafo">
              <span className="text-highlight">Somos una empresa 100% mexicana</span>, 
              que se distingue como una marca dedicada a la fabricación de productos 
              innovadores para la construcción sostenible y con enfoque
              de responsabilidad social.
            </p>
  
          </div>
          <div className="zigzag-imagen">
            <img src="/oficina.webp" alt="Oficina con Bricko" />
          </div>
        </div>

        {/* FILA 2: MISIÓN (REVERSA) */}
        <div className="zigzag-fila reversa">
          <div className="zigzag-texto">
            <h2 className="zigzag-titulo">Misión</h2>
            <p className="zigzag-parrafo">
              Proporcionar soluciones constructivas de alta calidad que minimicen el impacto ambiental, 
              fomentando la economía circular y ofreciendo alternativas estéticas y funcionales 
              para el diseño de espacios modernos.
            </p>
          </div>
          <div className="zigzag-imagen">
            <img src="/recamara.webp" alt="Recámara con acabados Bricko" />
          </div>
        </div>

        {/* FILA 3: VISIÓN */}
        <div className="zigzag-fila">
          <div className="zigzag-texto">
            <h2 className="zigzag-titulo">Visión</h2>
            <p className="zigzag-parrafo">
              Ser el referente nacional en materiales de construcción eco-sustentables, 
              liderando la transición hacia ciudades más verdes y espacios habitables 
              que respeten el equilibrio de nuestro ecosistema.
            </p>
          </div>
          <div className="zigzag-imagen">
            <img src="/banop.webp" alt="Baño con muro Bricko" />
          </div>
        </div>

      </section>

      {/* SECCIÓN 4: VALORES (CUADRÍCULA) */}
      <section className="nosotros-valores">
        <h2 className="titulo-seccion-limpio">Nuestros <span className="enfasis-verde">Valores</span></h2>
        <div className="valores-grid">
          <div className="valor-card">
            <h3>Sustentabilidad</h3>
            <p>Cada decisión que tomamos prioriza la salud del planeta.</p>
          </div>
          <div className="valor-card">
            <h3>Innovación</h3>
            <p>Buscamos constantemente nuevas formas de reciclar y construir.</p>
          </div>
          <div className="valor-card">
            <h3>Calidad</h3>
            <p>La ecología no debe sacrificar la resistencia ni la estética.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
