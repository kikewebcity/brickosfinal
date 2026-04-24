import React, { useState } from 'react'; // 'import' en minúscula corregido
import '../App.css';

const PreguntasFrecuentes = () => {
  const [faqActiva, setFaqActiva] = useState(null);

  const toggleFaq = (index) => {
    setFaqActiva(faqActiva === index ? null : index);
  };

  const listaFaqs = [
    {
      pregunta: '¿Cuál es la resistencia al fuego del material?',
      respuesta: 'Los bloques Bricko cuentan con un tratamiento ignífugo intrínseco en la matriz de celulosa. Presenta carbonización sin llama, impidiendo la propagación del incendio.'
    },
    {
      pregunta: '¿Cuál es la política de devolución por sobrantes?',
      respuesta: 'Política de cero mermas: Si le sobran piezas completas, puede retornarlas y le devolvemos el dinero equivalente a su costo unitario.'
    },
    {
      pregunta: '¿Se requiere equipo especializado para su instalación?',
      respuesta: 'No. La instalación es 100% en seco. Se puede cortar con segueta estándar y es totalmente atornillable.'
    }
  ];

  return (
    <div className="soporte-tecnico-seccion" style={{ minHeight: '100vh', paddingTop: '160px', backgroundColor: '#ffffff' }}>
      <div className="soporte-cabecera">
        <h1 className="soporte-titulo" style={{ fontSize: '3.5rem', color: 'var(--color-green)' }}>
          PREGUNTAS FRECUENTES
        </h1>
      </div>

      <div className="acordeon-contenedor">
        {listaFaqs.map((faq, index) => (
          <div key={index} className={`acordeon-item ${faqActiva === index ? 'faq-abierta' : ''}`}>
            <div className="acordeon-header" onClick={() => toggleFaq(index)} style={{ cursor: 'pointer' }}>
              <h3 className="faq-pregunta">{faq.pregunta}</h3>
              <span className="icono-estado">{faqActiva === index ? '−' : '+'}</span>
            </div>
            {faqActiva === index && (
              <div className="acordeon-body" style={{ padding: '20px', opacity: 1 }}>
                <p className="faq-respuesta" style={{ color: '#1a1a1a', fontWeight: '500', textAlign: 'left' }}>
                  {faq.respuesta}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
