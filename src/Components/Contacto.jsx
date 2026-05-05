import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      
      {/* BANNER CON IMAGEN DE FONDO */}
      <section className="contacto-hero-con-imagen">
        <div className="hero-overlay-dark">
          <h1 className="titulo-contacto">Contacto</h1>
          <p className="subtitulo-contacto">
            Estamos listos para asesorarte en la implementación técnica de Bricko en tu próximo desarrollo arquitectónico o escenográfico.
          </p>
        </div>
      </section>

      <div className="contacto-grid-principal">
        
        {/* COLUMNA DE DATOS (Basado en tablas de cliente) */}
        <div className="contacto-info-col">
          <div className="dato-bloque">
            <Mail className="icon-verde" size={28} />
            <div>
              <span className="etiqueta-dato">Correo electrónico</span>
              <p className="valor-dato">ventas@bricko.com</p>
            </div>
          </div>

          <div className="dato-bloque">
            <Phone className="icon-verde" size={28} />
            <div>
              <span className="etiqueta-dato">Teléfono de atención</span>
              <p className="valor-dato">+52 55 1230 6218</p>
            </div>
          </div>

          <div className="dato-bloque">
            <MapPin className="icon-verde" size={28} />
            <div>
              <span className="etiqueta-dato">Ubicación</span>
              <p className="valor-dato">
                Calle Mérida # 58, Los Reyes Acatlixhuayan, <br />
                Municipio de Temamatla, Estado de México.
              </p>
            </div>
          </div>

          <div className="dato-bloque">
            <Clock className="icon-verde" size={28} />
            <div>
              <span className="etiqueta-dato">Horario</span>
              <p className="valor-dato">Lunes a Viernes de 9:00 a 18:00 hrs.</p>
            </div>
          </div>
        </div>

        {/* COLUMNA DEL MAPA */}
        <div className="mapa-contenedor">
          <iframe 
            title="Ubicación Bricko"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.332304677761!2d-98.87342892534568!3d19.203649581898143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce19a774786631%3A0xc3b865527a20689b!2sCalle%20M%C3%A9rida%2058%2C%20Los%20Reyes%20Acatlixhuayan%2C%2056643%20Temamatla%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1715000000000" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
