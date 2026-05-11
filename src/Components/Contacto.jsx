import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      
      {/* 1. Banner Superior Limpio */}
      <section className="contacto-hero-visual">
        <img src="/pcontacto.webp" alt="Fábrica Bricko" className="img-banner-contacto" />
      </section>

      {/* 2. Cabecera de Texto */}
      <section className="contacto-cabecera-info">
        <h1 className="titulo-contacto-negro">Contacto</h1>
        <p className="subtitulo-contacto-gris">
          Estamos listos para asesorarte en la implementación técnica de Bricko en tu próximo desarrollo arquitectónico o escenográfico.
        </p>
      </section>

      {/* 3. Grid de Datos y Mapa */}
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

        {/* 4. Mapa con Pin Personalizado */}
        <div className="mapa-contenedor-pro">
          {/* Aquí integrarás el mapa con el pin personalizado */}
          <div id="map-bricko" style={{ width: '100%', height: '100%' }}>
            {/* Si no usas API de JS por ahora, deja el iframe, pero para el logo necesitas la API */}
            <iframe 
               title="Ubicación"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.45!2d-98.88!3d19.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzEzLjQiTiA5OMKwNTInNDcuMiJX!5e0!3m2!1ses!2smx!4v1715462400000"
               width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
