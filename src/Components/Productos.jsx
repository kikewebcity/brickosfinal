import React from 'react';
import '../App.css';
import FaqsProductos from './FaqsProductos'; // Invocamos el módulo dinámico de preguntas

const Productos = () => {
  return (
    <div className="productos-pagina-maestra">
      
      {/* =======================================================
          MÓDULO 1: CATÁLOGO TÉCNICO DE PRODUCTOS
          ======================================================= */}
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

      {/* GRID DE PRODUCTOS (Carrusel táctil en móviles gracias al CSS previo) */}
      <section className="productos-grid-principal">
        {/* PRODUCTO 1 */}
        <div className="producto-item-card">
          <img
            src="/ladrillodivisorio.webp"
            alt="Ladrillo Divisorio"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">Bloque</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 23 x 14 x 7 cm</p>
            <p>Peso: 0.5 kg (72% más ligero)</p>
          </div>
        </div>
        
        {/* PRODUCTO 2 */}
        <div className="producto-item-card">
          <img
            src="/paneldivisorio.png" 
            alt="Panel Monolítico"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">PANEL MONOLÍTICO</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 1.22 x 2.44 m</p>
            <p>Peso: 92.5 kg</p>
          </div>
        </div>
      </section>

      {/* =======================================================
          MÓDULO 2: GALERÍA DE APLICACIONES (FUSIONADO)
          ======================================================= */}
      {/* Transición visual oscura para separar el catálogo de la galería */}
      <section className="aplicaciones-hero" style={{ marginTop: '60px', padding: '80px 20px' }}>
        <h2 className="aplicaciones-titulo-principal" style={{ fontSize: '3.5rem', marginBottom: '15px' }}>
          APLICACIONES ARQUITECTÓNICAS
        </h2>
        <p className="aplicaciones-descripcion-hero">
          Descubre cómo la versatilidad de la celulosa Bricko se adapta a diferentes exigencias espaciales, brindando soluciones acústicas, modulares y estructuralmente seguras.
        </p>
      </section>

      <section className="aplicaciones-galeria-seccion" style={{ paddingTop: '80px' }}>
        
        {/* CASO DE USO 1: OFICINAS */}
        <div className="aplicacion-bloque">
          <div className="aplicacion-imagen-caja">
            <img src="/oficina.webp" alt="Oficinas Corporativas" className="aplicacion-img" />
          </div>
          <div className="aplicacion-texto-caja">
            <span className="aplicacion-categoria">SECTOR CORPORATIVO</span>
            <h3 className="aplicacion-subtitulo">Espacios de Trabajo</h3>
            <p className="aplicacion-parrafo">
              Nuestros bloques de celulosa segmentan oficinas abiertas de forma rápida y limpia. 
              La alta densidad garantiza un ambiente aislado del ruido, ideal para crear salas de juntas y cubículos privados sin necesidad de detener las operaciones por obra húmeda.
            </p>
          </div>
        </div>

        {/* CASO DE USO 2: RESIDENCIAL (Layout Invertido) */}
        <div className="aplicacion-bloque reversa">
          <div className="aplicacion-imagen-caja">
            <img src="/recamara.webp" alt="Diseño Residencial" className="aplicacion-img" />
          </div>
          <div className="aplicacion-texto-caja">
            <span className="aplicacion-categoria">SECTOR RESIDENCIAL</span>
            <h3 className="aplicacion-subtitulo">Diseño de Interiores</h3>
            <p className="aplicacion-parrafo">
              Transforma el hogar con muros divisorios de carga nula. La estética natural y la textura del material reciclado aportan calidez a recámaras y salas de estar, permitiendo remodelaciones veloces, estéticas y con alto aislamiento térmico.
            </p>
          </div>
        </div>

      </section>

      {/* =======================================================
          MÓDULO 3: PREGUNTAS FRECUENTES
          ======================================================= */}
      <div style={{ marginTop: '40px' }}>
        <FaqsProductos />
      </div>

    </div>
  );
};

export default Productos;
