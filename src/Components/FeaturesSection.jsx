import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Hammer, VolumeX, Feather } from 'lucide-react';
import '../App.css';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState('limpia');

  const featuresData = [
    {
      id: 'limpia',
      label: 'Instalación Limpia',
      icon: Sparkles,
      title: 'INSTALACIÓN LIMPIA',
      description:
        'Nuestros bloques se ensamblan en seco, eliminando escombros y polvos nocivos en la obra. Es la solución ideal para remodelaciones rápidas y espacios que requieren máxima higiene.',
    },
    {
      id: 'ignifuga',
      label: 'Seguridad Ignífuga',
      icon: ShieldCheck,
      title: 'SEGURIDAD IGNÍFUGA',
      description:
        'La matriz de celulosa está tratada químicamente para resistir altas temperaturas y retardar la propagación de la llama. Proporciona una capa de seguridad pasiva crucial para escenografías y desarrollos habitacionales.',
    },
    {
      id: 'total',
      label: 'Manejabilidad Total',
      icon: Hammer,
      title: 'MANEJABILIDAD TOTAL',
      description:
        'Se corta, clava y atornilla con la misma facilidad que la madera, simplificando la instalación y los acabados. No se requiere maquinaria pesada ni técnicos especializados.',
    },
    {
      id: 'acustico',
      label: 'Aislamiento Acústico',
      icon: VolumeX,
      title: 'AISLAMIENTO ACÚSTICO',
      description:
        'La alta densidad de los enlaces poliméricos en la matriz de celulosa actúa como un absorbedor de ondas sonoras, reduciendo la transmisión de ruido entre espacios y mejorando el confort ambiental.',
    },
    {
      id: 'extrema',
      label: 'Ligereza Extrema',
      icon: Feather,
      title: 'LIGEREZA EXTREMA',
      description:
        'Reduce drásticamente la carga estructural y facilita el transporte, permitiendo construcciones mucho más ágiles. Su bajo peso permite una logística eficiente y un manejo manual sin fatiga.',
    },
  ];

  const currentFeature = featuresData.find((f) => f.id === activeFeature);

  return (
    <section className="features-section">
      <div className="features-main-grid">
        {/* Columna Izquierda: Lista de Pills Interactivos */}
        <div className="features-pills-col">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`feature-pill ${
                activeFeature === feature.id ? 'active' : ''
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className="pill-content-left">
                {/* Renderizado dinámico del icono con Lucide-React */}
                <feature.icon className="pill-icon" size={20} strokeWidth={2} />
                <span className="pill-label">{feature.label}</span>
              </div>
              <span className="pill-action">
                {activeFeature === feature.id ? '−' : '+'}
              </span>
            </div>
          ))}
        </div>

        {/* Columna Derecha: Bloque de Contenido Dinámico con Color Institucional */}
        <div className="features-content-col">
          <h3 className="feature-title">{currentFeature.title}</h3>
          <p className="feature-paragraph">{currentFeature.description}</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
