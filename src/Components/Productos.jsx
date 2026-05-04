import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../App.css';
import FaqsProductos from './FaqsProductos'; 

const Productos = () => {
  return (
    <div className="productos-pagina-maestra">
      
      {/* MÓDULO 1: CATÁLOGO */}
      <section className="productos-hero-tecnico">
        <h1 className="titulo-seccion-productos">Catálogo estructural</h1>
        <p className="descripcion-cabecera-tecnica">
          Sistemas de construcción en seco diseñados para la optimización de cargas en interiores.
        </p>
      </section>

      <section className="productos-grid-principal">
        {/* Bloque */}
        <div className="producto-item-card">
          <div className="contenedor-galeria-producto">
            <img src="/ladrillodivisorio.webp" alt="Bloque" className="img-producto-tecnica" />
            <button className="flecha-galeria flecha-der"><ChevronRight size={24} /></button>
          </div>
          <h2 className="nombre-producto-ficha">Bloque estructural</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 23 x 14 x 7 cm</p>
          </div>
        </div>
        
        {/* Panel */}
        <div className="producto-item-card">
          <div className="contenedor-galeria-producto">
            <button className="flecha-galeria flecha-izq"><ChevronLeft size={24} /></button>
            <img src="/paneldivisorio.png" alt="Panel" className="img-producto-tecnica" />
          </div>
          <h2 className="nombre-producto-ficha">Panel monolítico</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 1.22 x 2.44 m</p>
          </div>
        </div>
      </section>

      {/* MÓDULO 2: APLICACIONES (ORDEN CORREGIDO) */}
      <section className="aplicaciones-hero-transicion">
        <h2 className="aplicaciones-titulo-principal">Aplicaciones</h2>
      </section>

      <section className="aplicaciones-galeria-seccion">
        {/* Caso 1 */}
        <div className="aplicacion-bloque">
          <span className="aplicacion-categoria">Sector corporativo</span>
          <h3 className="aplicacion-subtitulo">Espacios de trabajo</h3>
          <div className="aplicacion-imagen-caja">
            <img src="/oficina.webp" alt="Oficinas" className="aplicacion-img" />
          </div>
          <p className="aplicacion-parrafo">
            Nuestros bloques de celulosa segmentan oficinas abiertas de forma rápida y limpia, garantizando aislamiento acústico.
          </p>
        </div>

        {/* Caso 2 */}
        <div className="aplicacion-bloque">
          <span className="aplicacion-categoria">Sector residencial</span>
          <h3 className="aplicacion-subtitulo">Diseño de interiores</h3>
          <div className="aplicacion-imagen-caja">
            <img src="/recamara.webp" alt="Residencial" className="aplicacion-img" />
          </div>
          <p className="aplicacion-parrafo">
            Transforma el hogar con muros divisorios de carga nula. La estética natural aporta calidez a cualquier habitación.
          </p>
        </div>
      </section>

      <div style={{ marginTop: '40px' }}>
        <FaqsProductos />
      </div>
    </div>
  );
};

export default Productos;
