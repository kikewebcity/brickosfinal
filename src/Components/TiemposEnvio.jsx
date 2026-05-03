import React from 'react';

const TiemposEnvio = () => {
  return (
    <div className="envios-pagina" style={{ 
      padding: '120px 20px', 
      maxWidth: '100%', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      fontFamily: 'var(--font-text)' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-main)', 
          fontSize: '3.5rem', 
          color: 'var(--color-green)', 
          marginBottom: '40px',
          textTransform: 'uppercase' 
        }}>
          Tiempos de Envío y Logística
        </h1>
        
        <div className="cuerpo-envios" style={{ lineHeight: '1.8', color: '#1a1a1a', textAlign: 'justify' }}>
          <p><strong>Actualización:</strong> Los plazos de entrega están sujetos a la disponibilidad de stock y volumen del pedido técnico.</p>
          
          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>1. Cobertura Nacional</h2>
          <p>Realizamos envíos a toda la República Mexicana a través de socios logísticos especializados en carga pesada y manejo de materiales de construcción sustentable.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>2. Plazos de Entrega Estimados</h2>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>CDMX y Área Metropolitana:</strong> 3 a 5 días hábiles posteriores a la confirmación del pago.</li>
            <li><strong>Interior de la República:</strong> 5 a 10 días hábiles, dependiendo de la ubicación geográfica y accesibilidad de la zona.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', color: 'var(--color-dark)' }}>3. Proceso de Seguimiento</h2>
          <p>Una vez que el material sale de nuestro almacén, se proporcionará vía WhatsApp o correo electrónico un número de guía para el rastreo del pedido en tiempo real.</p>

          <div style={{ 
            marginTop: '50px', 
            padding: '25px', 
            border: '2px solid var(--color-green)', 
            borderRadius: '8px', 
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: 'var(--color-green)' }}>Importante:</h3>
            <p style={{ margin: 0 }}>Debido a las dimensiones y peso del material, la entrega se realiza a pie de camión. Asegúrese de contar con personal para la descarga al momento de la llegada.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiemposEnvio;
