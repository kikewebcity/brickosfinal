import React from 'react';
import '../App.css';

const Ventaja = () => {
  return (
    <div className="ventaja-pagina-maestra">
      
      {/* SECCIÓN 1: CABECERA TÉCNICA */}
      <section className="productos-hero-tecnico">
        <h1 className="titulo-seccion-productos">
          LA VENTAJA COMPETITIVA BRICKO
        </h1>
        <p className="descripcion-cabecera-tecnica">
          Ingeniería sostenible aplicada. Nuestro sistema no solo reemplaza al bloque tradicional de mampostería, sino que supera sus especificaciones en eficiencia de instalación, peso y huella de carbono.
        </p>
      </section>

      {/* SECCIÓN 2: GRID DE BENEFICIOS (Reutilizando la cuadrícula de pilares) */}
      <section className="nosotros-pilares-contenedor">
        
        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/sostenibilidad.png" alt="Impacto Ecológico" />
          </div>
          <h2 className="pilar-titulo-valor">IMPACTO ECOLÓGICO POSITIVO</h2>
          <p className="pilar-descripcion">
            Fabricación fundamentada en la economía circular mediante celulosa reciclada. Reducción directa de residuos sólidos y menor consumo energético en el proceso de curado.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/inovacion.png" alt="Ultra Ligereza" />
          </div>
          <h2 className="pilar-titulo-valor">ULTRA LIGEREZA ESTRUCTURAL</h2>
          <p className="pilar-descripcion">
            Hasta un 72% más ligero que los sistemas tradicionales. Esta propiedad reduce las cargas muertas en la edificación, optimiza la logística de transporte y acelera los tiempos de maniobra en obra.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/confianza.png" alt="Aislamiento Termoacústico" />
          </div>
          <h2 className="pilar-titulo-valor">AISLAMIENTO TERMOACÚSTICO</h2>
          <p className="pilar-descripcion">
            La alta densidad de nuestra matriz biopolimérica actúa como una barrera natural, mitigando la transferencia de sonido entre espacios y conservando la estabilidad térmica en interiores.
          </p>
        </div>

        <div className="pilar-tarjeta">
          <div className="pilar-icono-caja">
            <img src="/equipo.webp" alt="Instalación en Seco" />
          </div>
          <h2 className="pilar-titulo-valor">INSTALACIÓN EN SECO</h2>
          <p className="pilar-descripcion">
            Eliminación de aglomerantes húmedos. El ensamblaje modular permite modificaciones limpias, cortes con herramienta básica y cero generación de escombros.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Ventaja;
