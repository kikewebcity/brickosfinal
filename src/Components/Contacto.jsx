import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import MapaBricko from './MapaBricko'; // Importa el componente que creamos arriba
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      
      {/* BANNER VISUAL LIMPIO */}
      <section className="contacto-banner-visual">
        <img src="/pcontacto.webp" alt="Fábrica Bricko" className="img-banner-contacto" />
      </section>

      {/* CABECERA DE TEXTO SEPARADA */}
      <section className="contacto-cabecera-info">
        <h1 className="titulo-contacto-negro">Contacto</h1>
        <p className="subtitulo-contacto-gris">
          Estamos listos para asesorarte en la implementación técnica de Bricko en tu próximo desarrollo arquitectónico o escenográfico.
        </p>
      </section>

      {/* GRID DE DATOS Y MAPA */}
      <div className="contacto-grid-principal">
        <div className="contacto-info-col">
          <div className="dato-bloque">
            <Mail className="icon-verde" size={32} />
            <div>
              <span className="etiqueta-dato">Correo electrónico</span>
              <p className="valor-dato">ventas@bricko.com</p>
            </div>
          </div>

          <div className="dato-bloque">
            <Phone className="icon-verde" size={32} />
            <div>
              <span className="etiqueta-dato">Teléfono de atención</span>
              <p className="valor-dato">+52 55 1230 6218</p>
            </div>
          </div>

          <div className="dato-bloque">
            <MapPin className="icon-verde" size={32} />
            <div>
              <span className="etiqueta-dato">Ubicación de Fábrica</span>
              <p className="valor-dato">
                Calle Mérida # 58, Temamatla, <br />
                Estado de México.
              </p>
            </div>
          </div>

          <div className="dato-bloque">
            <Clock className="icon-verde" size={32} />
            <div>
              <span className="etiqueta-dato">Horario operativo</span>
              <p className="valor-dato">Lunes a Viernes: 9:00 - 18:00 hrs.</p>
            </div>
          </div>
        </div>

        {/* CONTENEDOR DEL MAPA LEAFLET */}
        <div className="mapa-contenedor-pro">
          <MapaBricko />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
