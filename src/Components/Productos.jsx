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
            src="/ladrillodivisorio.png"
            alt="Ladrillo Divisorio"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">LADRILLO DIVISORIO E-100</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 23 x 14 x 7 cm</p>
            <p>Peso: 0.5 kg (72% más ligero)</p>
            <p>Resistencia: 60 kg/cm²</p>
          </div>
        </div>

        <div className="producto-item-card">
          <img
            src="/blockhexagonales.png"
            alt="Block Ligero"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">BLOCK LIGERO B-200</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 40 x 15 x 20 cm</p>
            <p>Peso: 4.0 kg (51% más ligero)</p>
            <p>Aislamiento: 13.5 Kcal/hr °C</p>
          </div>
        </div>

        <div className="producto-item-card">
          <img
            src="/paneldivisorio.png"
            alt="Panel Monolítico"
            className="img-producto-tecnica"
          />
          <h2 className="nombre-producto-ficha">PANEL MONOLÍTICO P-300</h2>
          <div className="mini-tabla-datos">
            <p>Dimensiones: 1.22 x 2.44 m</p>
            <p>Peso: 92.5 kg</p>
            <p>Uso: Sustituto de yeso encartonado</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: TABLA COMPARATIVA DE RENDIMIENTO */}
      <section className="seccion-tabla-comparativa">
        <h2 className="titulo-tabla-rendimiento">
          RENDIMIENTO FRENTE A SISTEMAS TRADICIONALES
        </h2>
        <div className="contenedor-tabla-scroll">
          <table className="tabla-bricko-vs-tradicional">
            <thead>
              <tr>
                <th>Especificación Técnica</th>
                <th>Sistema Bricko</th>
                <th>Ladrillo/Block Convencional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peso en Ladrillo (23x14x7)</td>
                <td>0.5 kg</td>
                <td>1.8 kg</td>
              </tr>
              <tr>
                <td>Tiempo de Secado / Fraguado</td>
                <td>150 - 200 horas</td>
                <td>28 días (672 horas)</td>
              </tr>
              <tr>
                <td>Resistencia a la Compresión</td>
                <td>60 kg/cm²</td>
                <td>Variable (Estructural)</td>
              </tr>
              <tr>
                <td>Comportamiento al Fuego</td>
                <td>Carbonización sin llama</td>
                <td>No combustible (Arcilla)</td>
              </tr>
              <tr>
                <td>Instalación en Obra</td>
                <td>Corte con segueta / Atornillable</td>
                <td>Cortes mecánicos / Cemento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECCIÓN 4: EXTENSIÓN DEL CATÁLOGO (DISEÑO Y ESCENOGRAFÍA) */}
      <section className="seccion-extension-diseno">
        <div className="extension-contenido">
          <h2 className="titulo-extension">LÍNEA DE DISEÑO Y ESCENOGRAFÍA</h2>
          <p className="parrafo-extension">
            La Tabla Base de 80 x 10 x 122 cm ofrece una densidad de 256 kg/m³
            ideal para la manufactura de mobiliario sustentable como libreros y
            mesas. En el ámbito escénico, la ligereza del material y su cualidad
            ignífuga permiten crear sets de grabación y teatros seguros,
            modulares y de montaje ultra rápido sin generar escombros en el set.
          </p>
        </div>
      </section>

      {/* SECCIÓN 5: SOPORTE TÉCNICO / FAQS UNIFICADO */}
      <FaqsProductos />
    </div>
  );
};

export default Productos;
