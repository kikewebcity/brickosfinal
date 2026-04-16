import React, { useState, useEffect } from 'react';
// Importamos iconos técnicos estandarizados
import { Sparkles, ShieldCheck, Hammer, VolumeX, Leaf } from 'lucide-react'; 

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detector de dimensiones de pantalla (Viewport)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize(); // Verificación inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      titulo: 'Instalación Limpia',
      texto: 'Eliminación de aglomerantes húmedos. El ensamblaje modular permite modificaciones limpias, cortes con herramienta básica y cero generación de escombros.',
      icono: <Sparkles size={22} />
    },
    {
      titulo: 'Seguridad Ignífuga',
      texto: 'La matriz de celulosa está tratada químicamente para resistir altas temperaturas y retardar la propagación de la llama. Proporciona una capa de seguridad pasiva crucial.',
      icono: <ShieldCheck size={22} />
    },
    {
      titulo: 'Manejabilidad Total',
      texto: 'Permite cortes precisos, ranurados para instalaciones eléctricas o hidráulicas sin comprometer la integridad estructural del bloque.',
      icono: <Hammer size={22} />
    },
    {
      titulo: 'Aislamiento Acústico',
      texto: 'La alta densidad de nuestra matriz biopolimérica actúa como una barrera natural, mitigando la transferencia de sonido entre espacios de manera altamente eficiente.',
      icono: <VolumeX size={22} />
    },
    {
      titulo: 'Ligereza Extrema',
      texto: 'Reduce drásticamente la carga estructural y facilita el transporte, permitiendo construcciones mucho más ágiles. Su bajo peso permite una logística eficiente y un manejo manual sin fatiga.',
      icono: <Leaf size={22} />
    }
  ];

  return (
    <section className="features-section">
      <div className="features-main-grid">
        
        {/* COLUMNA IZQUIERDA: BOTONES (PILLS) Y CONTENIDO MÓVIL */}
        <div className="features-pills-col">
          {features.map((feature, index) => (
            <div key={index} className="feature-item-wrapper">
              
              {/* EL BOTÓN (PILL) */}
              <div
                className={`feature-pill ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="pill-content-left">
                  <span className="pill-icon">{feature.icono}</span>
                  <span className="pill-label">{feature.titulo}</span>
                </div>
                <span className="pill-action">
                  {activeFeature === index ? '−' : '+'}
                </span>
              </div>

              {/* RENDERIZADO CONDICIONAL: Aparece debajo del botón SOLO en móvil */}
              {isMobile && activeFeature === index && (
                <div className="features-content-col contenido-acordeon-movil">
                  <h3 className="feature-title">{feature.titulo}</h3>
                  <p className="feature-paragraph">{feature.texto}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* COLUMNA DERECHA: CAJA ESTÁTICA (SOLO VISIBLE EN ESCRITORIO) */}
        {!isMobile && (
          <div className="features-content-col contenido-escritorio">
            <h3 className="feature-title">{features[activeFeature].titulo}</h3>
            <p className="feature-paragraph">{features[activeFeature].texto}</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturesSection;
