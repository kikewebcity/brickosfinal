import React from 'react';
import '../App.css';

const Contacto = () => {
  return (
    <div className="contacto-pagina-maestra">
      <section className="contacto-hero-tecnico">
        <h2 className="titulo-seccion-productos">CONTACTO</h2>
        <p className="descripcion-cabecera-tecnica">
          Estamos listos para asesorarte en la implementacion tecnica de Bricko
          en tu proximo desarrollo arquitectonico o escenografico.
        </p>
      </section>

      <main className="contacto-grid-principal">
        <div className="contacto-informacion-columna">
          <div className="contacto-dato-bloque">
            <span className="contacto-etiqueta">Correo electrónico</span>
            <p className="contacto-valor">ventas@bricko.com</p>
          </div>

          <div className="contacto-dato-bloque">
            <span className="contacto-etiqueta">Teléfono de atención</span>
            <p className="contacto-valor">+52 55 5555 5555</p>
          </div>

          <div className="contacto-dato-bloque">
            <span className="contacto-etiqueta">Ubicación</span>
            <p className="contacto-valor">Ciudad de Mexico, Mexico</p>
          </div>

          <div className="contacto-dato-bloque">
            <span className="contacto-etiqueta">Horario</span>
            <p className="contacto-valor">Lunes a Viernes: 9:00 - 18:00 hrs</p>
          </div>
        </div>

        <div className="contacto-formulario-columna">
          <h3 className="contacto-subtitulo-form">Envíenos un mensaje</h3>
          <form className="contacto-formulario-tecnico">
            <div className="form-grupo">
              <label className="form-etiqueta">Nombre Completo</label>
              <input
                type="text"
                className="form-entrada"
                placeholder="Tu nombre..."
              />
            </div>

            <div className="form-grupo">
              <label className="form-etiqueta">Correo Electrónico</label>
              <input
                type="email"
                className="form-entrada"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div className="form-grupo">
              <label className="form-etiqueta">Asunto</label>
              <input
                type="text"
                className="form-entrada"
                placeholder="Cotización, Asesoría técnica..."
              />
            </div>

            <div className="form-grupo">
              <label className="form-etiqueta">Mensaje</label>
              <textarea
                className="form-area-texto"
                rows={5}
                placeholder="Cuentanos sobre tu proyecto..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="boton-accion-aislado"
              style={{ width: '100%' }}
            >
              ENVIAR CONSULTA
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contacto;
