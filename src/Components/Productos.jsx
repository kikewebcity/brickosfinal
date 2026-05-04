import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../App.css';
import FaqsProductos from './FaqsProductos'; 

const Productos = () => {
  // Arreglos de 4 imágenes para cada galería
  const imagenesCorporativo = [
    '/oficina.webp', 
    '/oficina2.webp', // Asegúrate de tener estas imágenes en /public
    '/oficina3.webp', 
    '/oficina4.webp'
  ];

  const imagenesResidencial = [
    '/recamara.webp', 
    '/recamara2.webp', 
    '/recamara3.webp', 
    '/recamara4.webp'
  ];

  const [indexCorp, setIndexCorp] = useState(0);
  const [indexRes, setIndexRes] = useState(0);

  const nextImg = (index, setIndex, total) => setIndex((index + 1) % total);
  const prevImg = (index, setIndex, total) => setIndex((index - 1 + total) % total);

  return (
    <div className="productos-pagina-maestra">
      
      {/* MÓDULO 1: CATÁLOGO */}
      <section className="productos-hero-tecnico">
        <p className="descripcion-cabecera-tecnica">
          Sistemas de construcción en seco diseñados para la optimización de cargas en interiores.
        </p>
      </section>

      <section className="productos-grid-principal">
        <div className="producto-item-card">
          <div className="contenedor-galeria-producto">
            <img src="/ladrillodivisorio.webp" alt="Bloque" className="img-producto-tecnica" />
            <button className="flecha-galeria flecha-der"><ChevronRight size={24} /></button>
          </div>
          <h2 className="nombre-producto-ficha">Bloque estructural</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 23 x 14 x 7 cm</p>
            <p>Peso: 0.5 kg (72% más ligero)</p>
          </div>
        </div>
        
        <div className="producto-item-card">
          <div className="contenedor-galeria-producto">
            <button className="flecha-galeria flecha-izq"><ChevronLeft size={24} /></button>
            <img src="/paneldivisorio.png" alt="Panel" className="img-producto-tecnica" />
          </div>
          <h2 className="nombre-producto-ficha">Panel monolítico</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 1.22 x 2.44 m</p>
            <p>Peso: 92.5 kg</p>
          </div>
        </div>
      </section>

      {/* MÓDULO 2: TRANSICIÓN OSCURA */}
      <section className="aplicaciones-hero">
        <h2 className="aplicaciones-titulo-principal">Aplicaciones arquitectónicas</h2>
        <p className="aplicaciones-descripcion-hero">
          Descubre cómo la versatilidad de la celulosa Bricko se adapta a diferentes exigencias espaciales.
        </p>
      </section>

      {/* MÓDULO 3: GALERÍAS DE APLICACIONES */}
      <section className="aplicaciones-galeria-seccion">
        
        {/* Galería 1: Corporativo */}
        <div className="aplicacion-bloque">
          <span className="aplicacion-categoria">Sector corporativo</span>
          <h3 className="aplicacion-subtitulo">Espacios de trabajo</h3>
          
          <div className="contenedor-galeria-dinamica">
            <button className="btn-flecha-img izq" onClick={() => prevImg(indexCorp, setIndexCorp, 4)}>
              <ChevronLeft size={30} />
            </button>
            <div className="aplicacion-imagen-caja">
              <img src={imagenesCorporativo[indexCorp]} alt="Galería Oficinas" className="aplicacion-img" />
            </div>
            <button className="btn-flecha-img der" onClick={() => nextImg(indexCorp, setIndexCorp, 4)}>
              <ChevronRight size={30} />
            </button>
          </div>

          <p className="aplicacion-parrafo">
            Nuestros bloques de celulosa segmentan oficinas abiertas de forma rápida y limpia. 
            Ideal para crear salas de juntas sin detener operaciones por obra húmeda.
          </p>
        </div>

        {/* Galería 2: Residencial */}
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
            Transforma el hogar con muros de carga nula. La estética natural aporta calidez 
            permitiendo remodelaciones estéticas y con alto aislamiento térmico.
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
