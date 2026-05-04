import React, { useEffect, useState, useRef } from 'react';
import { 
  CheckCircle, ShieldCheck, Volume2, Recycle, HardHat, 
  Clock, Zap, Hammer, Sliders, Leaf, Droplets, TreeDeciduous, CloudSync 
} from 'lucide-react';
import '../App.css';

const Ventaja = () => {
  const advantages = [
    { id: 1, icon: <Leaf size={32} />, text: "Producto amigable con el medio ambiente" },
    { id: 2, icon: <ShieldCheck size={32} />, text: "Gran resistencia mecánica" },
    { id: 3, icon: <Volume2 size={32} />, text: "Gran resistencia acústica" },
    { id: 4, icon: <Sliders size={32} />, text: "Menor cantidad de materiales empleados" },
    { id: 5, icon: <Zap size={32} />, text: "No genera desperdicios en su construcción" },
    { id: 6, icon: <Zap size={32} />, text: "Menor costo de implementación" },
    { id: 7, icon: <HardHat size={32} />, text: "No requiere mano de obra especializada" },
    { id: 8, icon: <Clock size={32} />, text: "Mayor facilidad de implementación" },
    { id: 9, icon: <Volume2 size={32} />, text: "Sin generación de ruido en obra" },
    { id: 10, icon: <Hammer size={32} />, text: "Libertad en el uso de clavos, pijas y tornillos" },
  ];

  return (
    <div className="ventaja-pagina-maestra">
      {/* CABECERA */}
      <section className="ventaja-hero-tecnico">
        <h1 className="titulo-seccion-productos">Ventajas competitivas</h1>
        <p className="descripcion-cabecera-tecnica">
          Ingeniería sustentable diseñada para optimizar costos, tiempos y reducir el impacto ambiental en cada obra.
        </p>
      </section>

      {/* GRID DE LAS 10 VENTAJAS */}
      <section className="ventaja-grid-contenedor">
        {advantages.map((adv) => (
          <div key={adv.id} className="ventaja-tarjeta-bloque">
            <div className="ventaja-icono-cabecera">
              <span className="ventaja-numero">{adv.id < 10 ? `0${adv.id}` : adv.id}</span>
              <div className="ventaja-icono-svg">{adv.icon}</div>
            </div>
            <p className="ventaja-texto-tarjeta">{adv.text}</p>
          </div>
        ))}
      </section>

      {/* SECCIÓN SABÍAS QUE (EL DATO DE LA TONELADA) */}
      <section className="seccion-sostenibilidad-impacto">
        <div className="sostenibilidad-overlay">
          <h2 className="sabias-que-titulo">Sabías que...</h2>
          <p className="por-cada-tonelada">Por cada tonelada (1000 kg) de papel reciclado:</p>
          
          <div className="stats-impacto-grid">
            <div className="stat-card">
              <TreeDeciduous size={48} className="stat-icon" />
              <h3 className="stat-numero">17</h3>
              <p className="stat-desc">Árboles salvados</p>
            </div>
            <div className="stat-card">
              <Droplets size={48} className="stat-icon" />
              <h3 className="stat-numero">26,000</h3>
              <p className="stat-desc">Litros de agua ahorrados</p>
            </div>
            <div className="stat-card">
              <CloudSync size={48} className="stat-icon" />
              <h3 className="stat-numero">27.6 kg</h3>
              <p className="stat-desc">De CO₂ evitados</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ventaja;
