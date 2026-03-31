import React from 'react';
import '../App.css';

const NoticiasSustentables = () => {
  return (
    <section className="noticias-estaticas-seccion">
      <div className="noticias-cabecera">
        <h2 className="noticias-titulo">
          ACTUALIDAD EN INGENIERÍA SUSTENTABLE
        </h2>
        <p className="noticias-subtitulo">
          Perspectivas técnicas sobre la evolución de los materiales
          biopoliméricos y su impacto en la arquitectura contemporánea.
        </p>
      </div>

      <div className="noticias-cuadricula-estatica">
        <article className="noticia-tarjeta-solida">
          <div className="noticia-imagen-contenedor">
            <img src="/oficina.png" alt="Biopolímeros en construcción" />
          </div>
          <div className="noticia-contenido">
            <span className="noticia-etiqueta-tecnica">
              CIENCIA DE MATERIALES
            </span>
            <h3 className="noticia-titular">
              La matriz de celulosa como sustituto estructural
            </h3>
            <p className="noticia-extracto">
              El avance en la compactación de fibras recicladas unidas mediante
              enlaces de amilopectina demuestra que es posible alcanzar
              resistencias a la compresión superiores a los métodos
              tradicionales de tablaroca, eliminando el uso de minerales
              extractivos.
            </p>
          </div>
        </article>

        <article className="noticia-tarjeta-solida">
          <div className="noticia-imagen-contenedor">
            <img src="/murorecamara.png" alt="Arquitectura modular" />
          </div>
          <div className="noticia-contenido">
            <span className="noticia-etiqueta-tecnica">ECONOMÍA CIRCULAR</span>
            <h3 className="noticia-titular">
              Cero escombros en la adecuación de espacios
            </h3>
            <p className="noticia-extracto">
              La implementación de sistemas de ensamble en seco revoluciona la
              logística en obra. Al permitir cortes limpios con herramientas
              manuales, se erradica la generación de polvo y mermas, optimizando
              los tiempos de entrega en proyectos de interiorismo comercial.
            </p>
          </div>
        </article>

        <article className="noticia-tarjeta-solida">
          <div className="noticia-imagen-contenedor">
            <img src="/banop.jpg" alt="Aislamiento acústico" />
          </div>
          <div className="noticia-contenido">
            <span className="noticia-etiqueta-tecnica">CONFORT AMBIENTAL</span>
            <h3 className="noticia-titular">
              Comportamiento termoacústico de alta densidad
            </h3>
            <p className="noticia-extracto">
              Estudios recientes confirman que la densidad volumétrica de los
              bloques de papel prensado actúa como una barrera natural contra la
              transmisión de ondas sonoras, convirtiéndolos en la solución ideal
              para aislar sets de grabación y oficinas corporativas.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NoticiasSustentables;
