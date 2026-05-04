import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../App.css';
import FaqsProductos from './FaqsProductos'; 

const Productos = () => {
  // 1. Configuración de Galerías (4 imágenes por categoría)
  const imagenesCorporativo = [
    '/coworking.webp', 
    '/school.webp', 
    '/negocio.webp', 
    '/gym.webp'
  ];

  const imagenesResidencial = [
    '/room.webp', 
    '/cocina.webp', 
    '/bodega.webp', 
    '/recamara.webp' 
  ];

  // 2. Estados para el control de índices
  const [indexCorp, setIndexCorp] = useState(0);
  const [indexRes, setIndexRes] = useState(0);

  // 3. Funciones de navegación
  const nextImg = (index, setIndex, total) => setIndex((index + 1) % total);
  const prevImg = (index, setIndex, total) => setIndex((index - 1 + total) % total);

  return (
    <div className="productos-pagina-maestra">
      
      {/* SECCIÓN HERO TÉCNICO */}
      <section className="productos-hero-tecnico">
        <h1 className="titulo-seccion-productos">Catálogo estructural</h1>
        <p className="descripcion-cabecera-tecnica">
          Sistemas de construcción en seco diseñados para la optimización de cargas en interiores.
        </p>
      </section>

      {/* GRID DE FICHAS TÉCNICAS (BLOQUE Y PANEL) */}
      <section className="productos-grid-principal">
        <div className="producto-item-card">
          <div className="contenedor-galeria-producto">
            <img src="/ladrillodivisorio.webp" alt="Bloque estructural" className="img-producto-tecnica" />
          </div>
          <h2 className="nombre-producto-ficha">Bloque estructural</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 23 x 14 x 7 cm</p>
            <p>Peso: 0.5 kg (72% más ligero)</p>
          </div>
        </div>
        
        <div className="producto-item-card">
          <div className="contenedor-galeria-producto">
            <img src="/paneldivisorio.png" alt="Panel monolítico" className="img-producto-tecnica" />
          </div>
          <h2 className="nombre-producto-ficha">Panel monolítico</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 1.22 x 2.44 m</p>
            <p>Peso: 92.5 kg</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN TRANSICIÓN OSCURA */}
      <section className="aplicaciones-hero">
        <h2 className="aplicaciones-titulo-principal">Aplicaciones arquitectónicas</h2>
        <p className="aplicaciones-descripcion-hero">
          Descubre cómo la versatilidad de la celulosa Bricko se adapta a diferentes exigencias espaciales.
        </p>
      </section>

      {/* GALERÍAS DE APLICACIONES ACTUALIZADAS */}
      <section className="aplicaciones-galeria-seccion">
        
        {/* GALERÍA 1: CORPORATIVO */}
        <div className="aplicacion-bloque">
          <span className="aplicacion-categoria">Sector corporativo</span>
          <h3 className="aplicacion-subtitulo">Espacios de trabajo</h3>
          
          <div className="contenedor-galeria-dinamica">
            <button className="btn-flecha-img izq" onClick={() => prevImg(indexCorp, setIndexCorp, 4)}>
              <ChevronLeft size={30} />
            </button>
            <div className="aplicacion-imagen-caja">
              <img src={imagenesCorporativo[indexCorp]} alt="Galería Corporativa" className="aplicacion-img" />
            </div>
            <button className="btn-flecha-img der" onClick={() => nextImg(indexCorp, setIndexCorp, 4)}>
              <ChevronRight size={30} />
            </button>
          </div>

          <p className="aplicacion-parrafo">
            Nuestros bloques de celulosa segmentan oficinas, escuelas y centros de coworking de forma rápida y limpia. 
            Soluciones acústicas ideales para entornos de alta productividad.
          </p>
        </div>

        {/* GALERÍA 2: RESIDENCIAL */}
        <div className="aplicacion-bloque">
          <span className="aplicacion-categoria">Sector residencial</span>
          <h3 className="aplicacion-subtitulo">Diseño de interiores</h3>

          <div className="contenedor-galeria-dinamica">
            <button className="btn-flecha-img izq" onClick={() => prevImg(indexRes, setIndexRes, 4)}>
              <ChevronLeft size={30} />
            </button>
            <div className="aplicacion-imagen-caja">
              <img src={imagenesResidencial[indexRes]} alt="Galería Residencial" className="aplicacion-img" />
            </div>
            <button className="btn-flecha-img der" onClick={() => nextImg(indexRes, setIndexRes, 4)}>
              <ChevronRight size={30} />
            </button>
          </div>

          <p className="aplicacion-parrafo">
            Transforma el hogar con muros de carga nula. La estética natural y capacidad aislante 
            son ideales para recámaras, cocinas y bodegas con control térmico.
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
