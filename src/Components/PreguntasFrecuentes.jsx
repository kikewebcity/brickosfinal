import React, { useState } from 'react';
import '../App.css';

const PreguntasFrecuentes = () => {
  const [faqActiva, setFaqActiva] = useState(null);

  const toggleFaq = (index) => {
    setFaqActiva(faqActiva === index ? null : index);
  };

  const listaFaqs = [
    {
      pregunta: '¿Cuál es la resistencia al fuego del material?',
      respuesta: 'Los bloques Bricko cuentan con un tratamiento ignífugo intrínseco en la matriz de celulosa. Ante la exposición directa al fuego, el material presenta carbonización sin llama, impidiendo la propagación del incendio y clasificándose como material seguro para interiores estructurales.'
    },
    {
      pregunta: '¿Los bloques Bricko pueden usarse en exteriores?',
      respuesta: 'No. El sistema constructivo está diseñado con ingeniería ligera exclusivamente para la optimización de cargas en interiores (muros divisorios, escenografías, mobiliario). La exposición prolongada a elementos climáticos externos compromete la matriz biopolimérica.'
    },
    {
      pregunta: '¿Se requiere equipo especializado para su instalación?',
      respuesta: 'No. La instalación es 100% en seco. Se pueden realizar cortes con segueta estándar o herramientas de carpintería básica. Es totalmente atornillable y permite el ranurado para instalaciones eléctricas e hidráulicas sin generar escombros.'
    },
    {
      pregunta: '¿Cuál es la política de devolución por sobrantes?',
      respuesta: 'Contamos con una política estricta de cero mermas para el cliente: "Solo te vendemos el material que necesitas". Si al finalizar su proyecto presenta piezas completas sobrantes, puede retornarlas a nuestras instalaciones y se le efectuará la devolución íntegra del dinero equivalente a su costo unitario.'
    },
    {
      pregunta: '¿Cuál es el tiempo estándar de envío?',
      respuesta: 'Los tiempos de entrega están sujetos a la volumetría del pedido y disponibilidad logística. Para pedidos estándar dentro de la zona metropolitana, el tiempo estimado de despliegue es de 3 a 5 días hábiles tras la confirmación de la orden de compra.'
    }
  ];

  return (
    <div className="soporte-tecnico-seccion" style={{ minHeight: '80vh', paddingTop: '120px' }}>
      <div className="soporte-cabecera">
        <h1 className="soporte-titulo" style={{ fontSize: '3.5rem', color: 'var(--color-green)' }}>
          PREGUNTAS FRECUENTES
        </h1>
        <p style={{ fontFamily: 'var(--font-text)', fontSize: '1.2rem', color: '#555', marginTop: '10px' }}>
          Consultas técnicas, normativas y operativas sobre el sistema constructivo Bricko.
        </p>
      </div>

      <div className="acordeon-contenedor">
        {listaFaqs.map((faq, index) => (
          <div 
            key={index} 
            className={`acordeon-item ${faqActiva === index ? 'faq-abierta' : ''}`}
          >
            <div 
              className="acordeon-header" 
              onClick={() => toggleFaq(index)}
            >
              <h3 className="faq-pregunta">{faq.pregunta}</h3>
              <span className="icono-estado">
                {faqActiva === index ? '−' : '+'}
              </span>
            </div>
            <div className="acordeon-body">
              <p className="faq-respuesta" style={{ paddingTop: '15px' }}>
                {faq.respuesta}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
