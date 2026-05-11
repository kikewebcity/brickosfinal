import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      
      {/* 1. BANNER VISUAL (SIN TEXTO) */}
      <section className="contacto-banner-imagen">
        <img 
          src="/ruta-a-tu-imagen-fabrica.jpg" 
          alt="Instalaciones de Fábrica Bricko" 
          className="img-banner-completa"
        />
      </section>

      {/* 2. SECCIÓN DE CABECERA TÉCNICA */}
      <section className="contacto-cabecera-texto">
        <div className="contenedor-1450">
          <h1 className="titulo-contacto-limpio">Contacto</h1>
          <p className="descripcion-contacto-gris">
            Estamos listos para asesorarte en la implementación técnica de Bricko en tu próximo desarrollo arquitectónico o escenográfico.
          </p>
        </div>
      </section>

      {/* 3. GRID DE INFORMACIÓN Y MAPA */}
      <div className="contacto-grid-principal">
        
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

        {/* CONTENEDOR DEL MAPA PERSONALIZADO */}
        <div className="mapa-contenedor-especial">
          <div id="google-map-custom" style={{ height: '100%', width: '100%', minHeight: '450px' }}>
            {/* Aquí se inicializa el mapa mediante API para permitir el logo personalizado */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
