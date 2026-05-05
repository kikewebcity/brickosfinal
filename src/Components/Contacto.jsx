import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      
      {/* CABECERA CON IMAGEN DE FONDO */}
      <section className="contacto-hero-con-imagen">
        <div className="hero-overlay-dark">
          <h1 className="titulo-contacto">Contacto</h1>
          <p className="subtitulo-contacto">
            Estamos listos para asesorarte en la implementación técnica de Bricko en tu próximo desarrollo.
          </p>
        </div>
      </section>

      <div className="contacto-grid-principal">
        
        {/* COLUMNA DE INFORMACIÓN (Datos de image_89.png) */}
        <div className="contacto-info-col">
          <div className="dato-bloque">
            <Mail className="icon-verde" size={24} />
            <div>
              <span className="etiqueta-dato">Correo electrónico</span>
              <p className="valor-dato">ventas@bricko.com</p>
            </div>
          </div>

          <div className="dato-bloque">
            <Phone className="icon-verde" size={24} />
            <div>
              <span className="etiqueta-dato">Teléfono de atención</span>
              <p className="valor-dato">+52 55 1230 6218</p>
            </div>
          </div>

          <div className="dato-bloque">
            <MapPin className="icon-verde" size={24} />
            <div>
              <span className="etiqueta-dato">Ubicación</span>
              <p className="valor-dato">
                Calle Mérida # 58, Los Reyes Acatlixhuayan, <br />
                Municipio de Temamatla, Estado de México.
              </p>
            </div>
          </div>

          <div className="dato-bloque">
            <Clock className="icon-verde" size={24} />
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4344445672!2d-98.8712345!3d19.2012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzA0LjQiTiA5OMKwNTInMTYuNCJX!5e0!3m2!1ses-419!2smx!4v1715000000000" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '15px' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
          <p className="nota-mapa">* Para ver el logo personalizado, se requiere activación de Google Business.</p>
        </div>

      </div>
    </div>
  );
};

export default Contacto;
