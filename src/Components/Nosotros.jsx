import React from 'react';
import '../App.css';
// 1. IMPORTACIÓN DEL LOGO DE COLOR (Ubicado en src/assets)
import logobrickoColor from '../assets/logobricko.png'; 

const Nosotros = () => {
  return (
    <div className="nosotros-pagina">
      {/* BANNER INSTITUCIONAL MODERNO */}
      <section className="nosotros-banner-moderno">
        <div className="nosotros-banner-grid">
          <div className="nosotros-caja-logo">
            {/* 2. USO DE LA VARIABLE IMPORTADA EN EL SRC */}
            <img
              src={logobrickoColor}
              alt="Logo Bricko Original"
              className="nosotros-logo-color"
            />
          </div>

          <div className="nosotros-caja-texto">
            <div className="nosotros-fondo-verde-acento"></div>
            <p className="nosotros-texto-formal">
              Nuestro slogan,{' '}
              <strong>La Revolución Ecológica en Construcción</strong>,
              encapsula nuestra misión de transformar la industria mediante
              prácticas innovadoras y productos eco amigables. En Bricko,
              estamos comprometidos a liderar un cambio hacia métodos de
              construcción más sostenibles y responsables con el medio ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* NARRATIVA EN ZIG-ZAG */}
      <section className="nosotros-zigzag-contenedor">
        <div className="zigzag-fila">
          <div className="zigzag-texto">
            <p className="zigzag-parrafo">
              <span className="text-highlight">
                Somos una empresa 100% mexicana
              </span>
              , que se distingue como una marca dedicada a la fabricación de
              productos innovadores para la construcción sostenible.
            </p>
            <p className="zigzag-parrafo">
              Nuestro principal producto, Bloques ecológicos, redefine los
              estándares de la industria al incorporar materiales reciclados y
              técnicas avanzadas de producción.
            </p>
          </div>
          <div className="zigzag-imagen">
            {/* CORRECTO: Ruta absoluta a la carpeta public */}
            <img src="/oficina.webp" alt="Bloques ecológicos Bricko" />
          </div>
        </div>

        <div className="zigzag-fila reversa">
          <div className="zigzag-texto">
            <p className="zigzag-parrafo">
              <span className="text-highlight">Misión.</span> Ofrecer una
              alternativa en el ámbito de la construcción, que ayude a resolver
              el problema ambiental de residuos sólidos y evitar el agotamiento
              de los recursos naturales.
            </p>
            <p className="zigzag-parrafo">
              <span className="text-highlight">Visión.</span> Ser un referente
              en la industria de la construcción sustentable, con base en
              criterios de la economía circular.
            </p>
          </div>
          <div className="zigzag-imagen">
            {/* CORRECTO: Ruta absoluta a la carpeta public */}
            <img src="/recamara.webp" alt="Interiorismo con Bricko" />
          </div>
        </div>
      </section>

      {/* CUADRÍCULA DE VALORES */}
      <section className="nosotros-pilares-contenedor">
        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/honestidad.png" alt="Honestidad" />
          </div>
          <h2 className="pilar-titulo-valor">HONESTIDAD</h2>
          <p className="pilar-descripcion">
            Transparencia total en nuestros procesos de fabricación y asesoría
            técnica.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/sostenibilidad.png" alt="Sostenibilidad" />
          </div>
          <h2 className="pilar-titulo-valor">SOSTENIBILIDAD</h2>
          <p className="pilar-descripcion">
            Transformamos residuos en soluciones arquitectónicas.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/inovacion.png" alt="Innovación" />
          </div>
          <h2 className="pilar-titulo-valor">INNOVACIÓN</h2>
          <p className="pilar-descripcion">
            Redefinimos los límites de la construcción modular.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/responsabilidad.png" alt="Responsabilidad" />
          </div>
          <h2 className="pilar-titulo-valor">RESPONSABILIDAD</h2>
          <p className="pilar-descripcion">
            Compromiso inquebrantable con el medio ambiente y la estabilidad
            estructural.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/equipo.webp" alt="Trabajo en equipo" />
          </div>
          <h2 className="pilar-titulo-valor">TRABAJO EN EQUIPO</h2>
          <p className="pilar-descripcion">
            Sinergia perfecta entre ingeniería, diseño y las necesidades de tu
            obra.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/confianza.png" alt="Confianza" />
          </div>
          <h2 className="pilar-titulo-valor">CONFIANZA</h2>
          <p className="pilar-descripcion">
            Materiales rigurosamente probados que aseguran la durabilidad y
            seguridad.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
