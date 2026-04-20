import React from 'react';
import '../App.css';
import FaqsProductos from './FaqsProductos'; // Invocamos el módulo dinámico

const Productos = () => {
  return (
    <div className="productos-pagina-maestra">
      {/* SECCIÓN 1: CABECERA TÉCNICA */}
      <section className="productos-hero-tecnico">
        <h1 className="titulo-seccion-productos">
          CATÁLOGO ESTRUCTURAL BRICKO
        </h1>
        <p className="descripcion-cabecera-tecnica">
          Sistemas de construcción en seco basados en una matriz biopolimérica
          de celulosa y amilopectina. Ingeniería ligera diseñada para la
          optimización de cargas en interiores.
        </p>
      </section>

      {/* SECCIÓN 2: GRID DE PRODUCTOS PRINCIPALES */}
      <section className="productos-grid-principal">
        <div className="producto-item-card">
          <img
            src="/ladrillodivisorio.webp"  /* CORREGIDO: De .png a .webp */
            alt="Ladrillo Divisorio"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">Bloque</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 23 x 14 x 7 cm</p>
            <p>Peso: 0.5 kg (72% más ligero)</p>
          </div>
        </div>
        
        <div className="producto-item-card">
          <img
            src="/paneldivisorio.png" 
            alt="Panel Monolítico"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">PANEL MONOLÍTICO </h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 1.22 x 2.44 m</p>
            <p>Peso: 92.5 kg</p>
          </div>
        </div>
      </section>


      {/* SECCIÓN 5: SOPORTE TÉCNICO / FAQS UNIFICADO */}
      <FaqsProductos />
    </div>
  );
};

export default Productos;
