import React from 'react';
import '../App.css';

const Inspiracion = () => {
  return (
    <div className="aplicaciones-pagina-maestra">
      <section className="aplicaciones-hero">
        <h1 className="aplicaciones-titulo-principal">
          APLICACIONES ESTRUCTURALES
        </h1>
        <p className="aplicaciones-descripcion-hero">
          Demostración empírica del sistema Bricko en diversos ecosistemas
          espaciales. Ingeniería de celulosa adaptada a las exigencias
          acústicas, térmicas y logísticas del habitar contemporáneo.
        </p>
      </section>

      <section className="aplicaciones-galeria-seccion">
        <div className="aplicacion-bloque">
          <div className="aplicacion-imagen-caja">
            <img
              src="/oficina.png"
              alt="Muros Bricko en espacios corporativos"
              className="aplicacion-img"
            />
          </div>
          <div className="aplicacion-texto-caja">
            <span className="aplicacion-categoria">
              01 // ARQUITECTURA CORPORATIVA
            </span>
            <h2 className="aplicacion-subtitulo">
              Aislamiento y Productividad
            </h2>
            <p className="aplicacion-parrafo">
              En entornos de alta densidad laboral, la contaminación auditiva es
              el principal factor de estrés. La instalación de muros divisorios
              con atenuación de 37.6 decibeles permite segmentar áreas de
              trabajo abierto, salas de juntas y espacios de descanso,
              garantizando privacidad absoluta sin comprometer la carga
              estructural del edificio.
            </p>
          </div>
        </div>

        <div className="aplicacion-bloque reversa">
          <div className="aplicacion-imagen-caja">
            <img
              src="/recamara.png"
              alt="Muros Bricko en interiores residenciales"
              className="aplicacion-img"
            />
          </div>
          <div className="aplicacion-texto-caja">
            <span className="aplicacion-categoria">
              02 // ENTORNO RESIDENCIAL
            </span>
            <h2 className="aplicacion-subtitulo">
              Confort Térmico y Modulación
            </h2>
            <p className="aplicacion-parrafo">
              La vivienda moderna exige adaptabilidad. Nuestro sistema permite
              reconfigurar distribuciones internas de forma limpia y silenciosa.
              La matriz polimérica del bloque actúa como un regulador térmico
              natural, manteniendo las habitaciones aisladas de fluctuaciones
              extremas de temperatura y ofreciendo un acabado texturizado que
              aporta calidez visual al hogar.
            </p>
          </div>
        </div>

        <div className="aplicacion-bloque">
          <div className="aplicacion-imagen-caja">
            <img
              src="/equipo.png"
              alt="Muros Bricko en escenografía y teatro"
              className="aplicacion-img"
            />
          </div>
          <div className="aplicacion-texto-caja">
            <span className="aplicacion-categoria">
              03 // PRODUCCIÓN ESCÉNICA Y ESTUDIOS
            </span>
            <h2 className="aplicacion-subtitulo">Acústica y Montaje Efímero</h2>
            <p className="aplicacion-parrafo">
              La industria creativa requiere soluciones estructurales dinámicas.
              Para el diseño de escenografías teatrales y sets de grabación, el
              sistema ofrece un ensamblaje acelerado que prescinde de
              herramientas pesadas. Su composición ignífuga asegura el
              cumplimiento de normativas de seguridad en recintos cerrados,
              mientras que su densidad bloquea la reverberación del sonido
              durante las producciones audiovisuales.
            </p>
          </div>
        </div>
      </section>

      <section className="aplicaciones-cierre-tecnico">
        <h2 className="cierre-tecnico-titulo">
          TRANSFORMA TU METRAJE CUADRADO
        </h2>
        <p className="cierre-tecnico-texto">
          La eficiencia de nuestra patente elimina la generación de escombros en
          sitio. Solicita la cubicación exacta para tu proyecto arquitectónico o
          escénico y recibe únicamente el material necesario para tu ensamble.
        </p>
        <button
          className="boton-accion-aislado"
          onClick={() => window.scrollTo(0, 0)}
        >
          CONTACTAR INGENIERÍA
        </button>
      </section>
    </div>
  );
};

export default Inspiracion;
