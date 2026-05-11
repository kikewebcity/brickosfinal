import React, { useState, useEffect } from 'react';
import FeaturesSection from './FeaturesSection';
import Calculadora from './Calculadora';
import FaqsProductos from './FaqsProductos';

function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroImages = ['/recamara.webp', '/oficina.webp', '/banop.webp'];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <>
      <section className="hero-slider">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-slider-content">
          <h1 className="titulo-monumental-limpio">
            Bloques ecológicos <br /> para tus proyectos
          </h1>
          <p className="subtitulo-hero">
            Modificación estructural en tu casa, oficina o lugar de trabajo
          </p>
          <button 
            className="boton-accion-aislado"
            onClick={() => document.querySelector('.intro-section-v2')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="btn-text-desktop">Calcula la cantidad de brickos para tu proyecto</span>
            <span className="btn-text-mobile">Calcula tu proyecto</span>
          </button>
        </div>
      </section>

      <div className="fondo-ecosustentable">
        <section className="intro-section-v2">
          <h3 className="mision-titulo">NUESTRA MISIÓN</h3>
          <p className="mision-texto">
            Redefine los espacios interiores convirtiendo el papel reciclado en arquitectura 
          </p>
        </section>
        <FeaturesSection />
        
        <section className="contenedor-seccion-aire">
          <h2 className="titulo-seccion-limpio">
            Calcula el <span className="enfasis-verde">material</span> que requieres para tu proyecto
          </h2>
          <Calculadora />
        </section>
        
        <FaqsProductos />
      </div>
    </>
  );
}

export default Inicio;
