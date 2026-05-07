import React, { useState, useEffect } from 'react';
import './App.css';

// 1. Importación de componentes modulares
import FeaturesSection from './Components/FeaturesSection';
import Calculadora from './Components/Calculadora';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Productos from './Components/Productos';
import Ventaja from './Components/Ventaja';
import FaqsProductos from './Components/FaqsProductos';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes';
import NoticiasSustentables from './Components/NoticiasSustentables';
import AvisoPrivacidad from './Components/AvisoPrivacidad';
import TiemposEnvio from './Components/TiemposEnvio';

// 2. Importación de iconos y activos visuales
import { ShoppingCart, Truck, Menu, X } from 'lucide-react'; // Agregué Menu y X
import logoBricko from './assets/logobricko.png';
import logoWhite from './assets/logowhite.png';
import iconYt from './assets/iconoyoutube.png';
import iconInsta from './assets/iconoinstagram.png';
import iconFb from './assets/iconofacebook.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [vistaActual, setVistaActual] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  const heroImages = ['/recamara.webp', '/oficina.webp', '/banop.webp'];
  
  const secciones = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Quienes somos' },
    { id: 'productos', label: 'Productos & aplicaciones' },
    { id: 'ventaja', label: 'Ventajas' },
    { id: 'noticias', label: 'Bricko news' },
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleScroll = () => { 
      setScrolled(window.scrollY > 50); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContenido = () => {
    switch (vistaActual) {
      case 'nosotros': return <Nosotros />;
      case 'productos': return <Productos />;
      case 'noticias': return <NoticiasSustentables />;
      case 'contacto': return <Contacto />;
      case 'ventaja': return <Ventaja />;
      case 'faq': return <PreguntasFrecuentes />;
      case 'privacidad': return <AvisoPrivacidad />;
      case 'envios': return <TiemposEnvio />;
      default: return renderInicio();
    }
  };

  const renderInicio = () => (
    <>
      <section className="hero-slider">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-slider-content">
          <h1 className="titulo-monumental-limpio">
            Bloques ecológicos <br /> para tus proyectos
          </h1>
          <p className="subtitulo-hero">
            Modificación estructural en tu casa, oficina o lugar de trabajo
          </p>
          <button 
            className="boton-accion-aislado"
            onClick={() => document.querySelector('.intro-section').scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="btn-text-desktop">Calcula la cantidad de brickos para tu proyecto</span>
            <span className="btn-text-mobile">Calcula tu proyecto</span>
          </button>
        </div>
      </section>

      <div className="fondo-ecosustentable">
        <section className="intro-section">
          <h3 className="intro-title">
            Redefine los espacios interiores convirtiendo el <span className="text-highlight">papel reciclado</span> en <span className="text-highlight">arquitectura</span>
          </h3>
        </section>
        <FeaturesSection />
        <section className="contenedor-seccion-aire">
          <h2 className="titulo-seccion-limpio">
            Calcula el <span className="enfasis-verde">material</span> de tu proyecto
          </h2>
          <Calculadora />
        </section>
        <FaqsProductos />
      </div>
    </>
  );

  return (
    <div className="main-container">
      {/* 1. Barra Superior */}
      <div className="top-bar">
        <Truck size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
        <span>Envíos a todo el país</span>
      </div>

      {/* 2. Navegador Pegajoso */}
      <nav className={`barra-navegacion ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div 
          className="contenedor-logo" 
          onClick={() => { setVistaActual('inicio'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
        >
          <img src={logoBricko} alt="Bricko" className="logo-img" />
        </div>

        {/* DINÁMICA DE LINKS: Aquí estaba el error */}
        <ul className={`enlaces-navegacion ${menuOpen ? 'activos' : ''}`}>
          {secciones.map((sec) => (
            <li
              key={sec.id}
              className={vistaActual === sec.id ? 'active-link' : ''}
              onClick={() => { 
                setVistaActual(sec.id); 
                setMenuOpen(false); 
                window.scrollTo({top: 0, behavior: 'smooth'}); 
              }}
            >
              {sec.label}
            </li>
          ))}
        </ul>

        <div className="iconos-navegacion">
          <ShoppingCart size={22} strokeWidth={2.5} style={{ cursor: 'pointer' }} />
          <button className="boton-hamburguesa" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 3. Contenido Dinámico */}
      <main className="contenido-principal">
        {renderContenido()}
      </main>

      {/* 4. Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col left-col">
            <img src={logoWhite} alt="Bricko" className="footer-logo-img" />
            <p className="footer-slogan">Revolución ecológica en construcción</p>
          </div>

          <div className="footer-col center-col">
            <ul className="footer-links">
              <li onClick={() => { setVistaActual('faq'); window.scrollTo({top: 0}); }}>Preguntas frecuentes</li>
              <li onClick={() => { setVistaActual('envios'); window.scrollTo({top: 0}); }}>Tiempos de envío</li>
              <li onClick={() => { setVistaActual('privacidad'); window.scrollTo({top: 0}); }}>Aviso de privacidad</li>
            </ul>
          </div>

          <div className="footer-col right-col">
            <p className="footer-contact">Email: ventas@bricko.com</p>
            <div className="social-icons">
              <img src={iconYt} alt="YT" className="social-img" />
              <img src={iconInsta} alt="IG" className="social-img" />
              <img src={iconFb} alt="FB" className="social-img" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
