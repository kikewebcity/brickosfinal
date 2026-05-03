import React from 'react';

const AvisoPrivacidad = () => {
  return (
    <div className="privacidad-pagina" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-text)' }}>
      <h1 style={{ fontFamily: 'var(--font-main)', fontSize: '3rem', color: 'var(--color-green)', marginBottom: '40px' }}>
        AVISO DE PRIVACIDAD
      </h1>
      
      <div className="cuerpo-aviso" style={{ lineHeight: '1.8', color: '#1a1a1a', textAlign: 'justify' }}>
        <p><strong>Última actualización: Mayo 2026</strong></p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>1. Responsable del Tratamiento</h2>
        <p>Bricko, con domicilio en la Ciudad de México, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>2. Datos Personales Recabados</h2>
        <p>Recabamos sus datos mediante nuestra calculadora de ingeniería y formularios de contacto. Estos incluyen nombre, teléfono, correo electrónico y las dimensiones técnicas de sus proyectos constructivos.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>3. Finalidades</h2>
        <p>Sus datos tienen como fin principal la prospección comercial, el cálculo preciso de suministros y la logística de entrega de material. No vendemos ni cedemos sus datos a terceros ajenos a la operación logística de Bricko.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>4. Derechos ARCO</h2>
        <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un correo electrónico a <strong>ventas@bricko.com</strong> indicando claramente su petición.</p>

        <div style={{ marginTop: '50px', padding: '20px', border: '1px solid var(--color-green)', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <p style={{ margin: 0 }}>Al utilizar nuestra calculadora y contactarnos vía WhatsApp, usted acepta los términos de este aviso.</p>
        </div>
      </div>
    </div>
  );
};

export default AvisoPrivacidad;
