import React from 'react';

const Nosotros = () => {
  return (
    <div className="nosotros-layout" style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* SECCIÓN 1: IDENTIDAD MONUMENTAL */}
      <section style={{ padding: '120px 20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="reveal-header" style={{ 
          fontFamily: 'var(--font-main)', 
          fontSize: '4rem', 
          color: 'var(--color-dark)', 
          marginBottom: '30px',
          lineHeight: '1.1'
        }}>
          Transformamos la <span className="enfasis-verde">materia</span> en <span className="enfasis-verde">justicia</span> espacial
        </h1>
        <p className="reveal-content" style={{ 
          fontSize: '1.4rem', 
          color: '#555', 
          maxWidth: '700px', 
          margin: '0 auto', 
          lineHeight: '1.6' 
        }}>
          En Bricko, no solo fabricamos bloques; diseñamos herramientas de supervivencia y estética sustentable para un mundo que necesita recuperar su voz.
        </p>
      </section>

      {/* SECCIÓN 2: EL ORIGEN - VÍCTOR AGUIRRE & LÜMINION */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontFamily: 'var(--font-main)', fontSize: '2.5rem', marginBottom: '20px' }}>
              La visión detrás del bloque
            </h2>
            <div style={{ lineHeight: '1.8', color: '#333', fontSize: '1.1rem', textAlign: 'justify' }}>
              <p style={{ marginBottom: '20px' }}>
                Fundado por <strong>Víctor Aguirre</strong>, consultor en Propiedad Industrial y apasionado de la Biología Molecular, Bricko nace de la intersección entre el rigor técnico de <strong>Lüminion</strong> y la urgencia de crear una arquitectura verdaderamente circular.
              </p>
              <p>
                Nuestra obra es un testimonio de cómo el papel reciclado puede transformarse en una estructura sólida, capaz de redefinir oficinas, hogares y espacios creativos sin dejar huella de carbono, pero dejando una marca profunda en la identidad de quien los habita.
              </p>
            </div>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <div style={{ 
              border: '2px solid var(--color-green)', 
              padding: '40px', 
              borderRadius: '20px', 
              display: 'inline-block',
              backgroundColor: '#fff' 
            }}>
              <h3 style={{ color: 'var(--color-green)', fontSize: '3rem', margin: '0' }}>100%</h3>
              <p style={{ margin: '0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Papel Reciclado
              </p>
              <div style={{ height: '2px', backgroundColor: '#eee', margin: '20px 0' }}></div>
              <h3 style={{ color: 'var(--color-green)', fontSize: '3rem', margin: '0' }}>0</h3>
              <p style={{ margin: '0', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Mermas Totales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: FILOSOFÍA DE DISEÑO */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-main)', fontSize: '2.5rem', marginBottom: '50px' }}>
          Arquitectura del <span className="enfasis-verde">orden</span> en el caos
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { t: 'Evolución', d: 'No creemos en lo estático. Nuestros bloques permiten que tu espacio crezca contigo.' },
            { t: 'Conciencia', d: 'Cada pieza de Bricko es una decisión política a favor de la regeneración ambiental.' },
            { t: 'Legado', d: 'Protegemos tu inversión y tu entorno con la seriedad técnica de la propiedad intelectual.' }
          ].map((item, i) => (
            <div key={i} style={{ width: '300px', padding: '30px', borderBottom: '4px solid var(--color-green)', backgroundColor: '#fff' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-dark)' }}>{item.t}</h4>
              <p style={{ color: '#666', lineHeight: '1.5' }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
