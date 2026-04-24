import React, { useState, useEffect } from 'react';
import './App.css';

// Importación de componentes modulares
import GaleriaAcabados from './Components/GaleriaAcabados';
import FeaturesSection from './Components/FeaturesSection';
import Calculadora from './Components/Calculadora';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Inspiracion from './Components/Inspiracion';
import Productos from './Components/Productos';
import Ventaja from './Components/Ventaja';
import FaqsProductos from './Components/FaqsProductos';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes';
import NoticiasSustentables from './Components/NoticiasSustentables';

// Importación de iconos y activos visuales
import { ShoppingCart, Truck } from 'lucide-react';
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

  const heroImages = ['/recamara.webp','/oficina.webp', '/banop.webp'];

  const secciones = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Quienes Somos' },
    { id: 'productos', label: 'Productos & Aplicaciones' },
    { id: 'ventaja', label: 'Ventaja' }, // ID corregido a singular
    { id: 'noticias', label: 'Bricko News' }, // ID actualizado para noticias
    { id: 'contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    window.addEventListener('scroll', handleScroll);
    document.querySelectorAll('.reveal-header, .reveal-content').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const renderContenido = () => {
    switch (vistaActual) {
      case 'nosotros': return <Nosotros />;
      case 'productos': return <Productos />;
      case 'noticias': return <NoticiasSustentables />; // Vinculación correcta
      case 'contacto': return <Contacto />;
      case 'ventaja': return <Ventaja />;
      case 'faq': return <PreguntasFrecuentes />;
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
          <h1 className="titulo-monumental-limpio">Bloques ecológicos<br />para tus proyectos</h1>
          <button className="boton-accion-aislado" onClick={() => document.querySelector('.contenedor-seccion-aire').scrollIntoView({ behavior: 'smooth' })}>
            Calcula tu material
          </button>
        </div>
      </section>

      <div className="fondo-ecosustentable">
        <section className="intro-section">
          <div className="intro-container">
            <h2 className="intro-title">
              Redefine los espacios interiores convirtiendo el <span className="text-highlight">papel reciclado</span> en <span className="text-highlight">arquitectura</span>.
            </h2>
          </div>
        </section>
        <FeaturesSection />
        <section className="contenedor-seccion-aire">
          <div className="reveal-header">
            <h2 className="titulo-seccion-limpio">Calcula el <span className="enfasis-verde">material</span> de tu proyecto</h2>
            <p className="subtitulo-seccion-limpio">Selecciona dimensiones para una precisión técnica inmediata.</p>
          </div>
          <div className="reveal-content"><Calculadora /></div>
        </section>
        <FaqsProductos />
      </div>
    </>
  );

  return (
    <div className="main-container">
      <div className="top-bar">
        <Truck size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
        <span>Envíos a todo el país</span>
      </div>

      <nav className={`barra-navegacion ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="contenedor-logo" onClick={() => { setVistaActual('inicio'); window.scrollTo({top: 0, behavior: 'smooth'}); }} style={{ cursor: 'pointer' }}>
          <img src={scrolled ? logoWhite : logoBricko} alt="Bricko" className="logo-img" />
        </div>

        <ul className={`enlaces-navegacion ${menuOpen ? 'activos' : ''}`}>
          {secciones.map((sec) => (
            <li
              key={sec.id}
              className={vistaActual === sec.id ? 'active-link' : ''}
              onClick={() => { setVistaActual(sec.id); setMenuOpen(false); }}
            >
              {sec.label}
            </li>
          ))}
        </ul>

        <div className="iconos-navegacion">
          <ShoppingCart size={22} strokeWidth={2.5} />
          <button className="boton-hamburguesa" onClick={() => setMenuOpen(!menuOpen)}>
            <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="2" fill="none">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      <main className="contenido-principal">{renderContenido()}</main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col left-col">
            <img src={logoWhite} alt="Bricko" className="footer-logo-img" />
            <p className="footer-slogan">Revolución Ecológica en Construcción</p>
          </div>
          
          <div className="footer-col center-col">
            <ul className="footer-links">
              <li onClick={() => { setVistaActual('faq'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Preguntas Frecuentes</li>
              <li><a href="/politica-envios.pdf" target="_blank" rel="noopener noreferrer">Tiempos de Envío</a></li>
              <li><a href="/aviso-privacidad.pdf" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a></li>
            </ul>
          </div>
          
          <div className="footer-col right-col">
            <p className="footer-contact">Email: ventas@bricko.com</p>
            <p className="footer-contact">Tel: -55-55-55-55-55</p>
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
