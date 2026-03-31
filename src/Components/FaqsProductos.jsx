import React, { useState } from 'react';
import '../App.css';

const FaqsProductos = () => {
  const [activo, setActivo] = useState(null);

  const faqs = [
    {
      id: 1,
      pregunta: '1. COMPORTAMIENTO DEL MATERIAL ANTE LA HUMEDAD',
      respuesta:
        'Bricko se ha diseñado con un enfoque riguroso para aplicaciones en interiores. Debido a su naturaleza higroscópica, el material debe permanecer resguardado de la precipitación pluvial y vientos fuertes. La exposición directa al agua compromete la estabilidad estructural de la matriz de celulosa, por lo que su uso óptimo se limita estrictamente a ambientes secos y controlados.',
    },
    {
      id: 2,
      pregunta: '2. SEGURIDAD Y RESISTENCIA ANTE EL FUEGO',
      respuesta:
        'La composición química de la pasta base, fundamentada en enlaces poliméricos de amilopectina, garantiza una alta resistencia al fuego. Al ser sometido a calor extremo, el bloque no propaga la llama; en su lugar, experimenta un proceso de carbonización gradual. Esta característica es una ventaja crítica para la seguridad en escenografías y desarrollos habitacionales.',
    },
    {
      id: 3,
      pregunta: '3. REQUERIMIENTOS DE HERRAMIENTA PARA INSTALACIÓN',
      respuesta:
        'La maleabilidad es una de las mayores ventajas competitivas de nuestra patente. No se requiere maquinaria pesada ni técnicos especializados para su manejo. El material permite ser taladrado, clavado o atornillado con herramientas manuales comunes, y puede cortarse con precisión milimétrica utilizando una segueta convencional, lo que reduce drásticamente el ruido en obra.',
    },
    {
      id: 4,
      pregunta: '4. CAPACIDAD DE ABSORCIÓN DE ACABADOS',
      respuesta:
        'La textura rústica y plana de los bloques está diseñada para integrarse estéticamente con facilidad. La superficie soporta la aplicación directa de pinturas vinílicas de base agua o pastas decorativas. Al eliminar por completo los tiempos de fraguado de mezclas húmedas tradicionales, el proceso de acabado final es inmediato y logísticamente eficiente.',
    },
  ];

  const toggleFaq = (index) => {
    setActivo(activo === index ? null : index);
  };

  return (
    <section className="soporte-tecnico-seccion">
      <div className="soporte-cabecera">
        <h2 className="soporte-titulo">
          ESPECIFICACIONES DE RENDIMIENTO Y MANTENIMIENTO
        </h2>
      </div>

      <div className="acordeon-contenedor">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`acordeon-item ${activo === index ? 'faq-abierta' : ''}`}
          >
            <div className="acordeon-header" onClick={() => toggleFaq(index)}>
              <h3 className="faq-pregunta">{faq.pregunta}</h3>
              <span className="icono-estado">
                {activo === index ? '−' : '+'}
              </span>
            </div>

            <div className="acordeon-body">
              <p className="faq-respuesta">{faq.respuesta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsProductos;
