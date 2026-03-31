import React, { useState, useEffect } from 'react';
import './App.css';

import GaleriaAcabados from './Components/GaleriaAcabados';
import FeaturesSection from './Components/FeaturesSection';
import Calculadora from './Components/Calculadora';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';
import Inspiracion from './Components/Inspiracion';
import Productos from './Components/Productos';
import Ventaja from './Components/Ventaja';
import FaqsProductos from './Components/FaqsProductos';

import { Search, ShoppingCart, Truck } from 'lucide-react';
import logoWhite from './assets/logowhite.png';
import iconYt from './assets/iconoyoutube.png';
import iconInsta from './assets/iconoinstagram.png';
import iconFb from './assets/iconofacebook.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [buscadorAbierto, setBuscadorAbierto] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [vistaActual, setVistaActual] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  const heroImages = ['/oficina.png', '/banop.jpg', '/murorecamara.png'];

  const secciones = [
    { id: 'nosotros', label: 'Quienes Somos' },
    { id: 'productos', label: 'Productos' },
    { id: 'ventaja', label: 'Ventaja' },
    { id: 'aplicaciones', label: 'Aplicaciones' },
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    window.addEventListener('scroll', handleScroll);
    document
      .querySelectorAll('.reveal-header, .reveal-content')
      .forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const renderContenido = () => {
    switch (vistaActual) {
      case 'nosotros':
        return <Nosotros />;
      case 'productos':
        return <Productos />;
      case 'aplicaciones':
        return <Inspiracion />;
      case 'contacto':
        return <Contacto />;
      case 'ventaja':
        return <Ventaja />;
      default:
        return renderInicio();
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
            Bloques ecológicos
            <br />
            para tus proyectos
          </h1>
          <button
            className="boton-accion-aislado"
            onClick={() =>
              document
                .querySelector('.contenedor-seccion-aire')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Calcula tu material
          </button>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-container">
          <h2 className="intro-title">
            Redefine los espacios interiores convirtiendo el{' '}
            <span className="text-highlight">papel reciclado</span> en{' '}
            <span className="text-highlight">arquitectura</span>.
          </h2>
        </div>
      </section>

      <FeaturesSection />

      <section className="contenedor-seccion-aire">
        <div className="reveal-header">
          <h2 className="titulo-seccion-limpio">
            Calcula el <span className="enfasis-verde">material</span> de tu
            proyecto
          </h2>
          <p className="subtitulo-seccion-limpio">
            Selecciona el tipo de estructura y ajusta las dimensiones para una
            precisión técnica inmediata.
          </p>
        </div>
        <div className="reveal-content">
          <Calculadora />
        </div>
      </section>

      <FaqsProductos />

      <section className="seccion-inspiracion-unificada">
        <div className="reveal-header">
          <h2 className="titulo-seccion-unificada">
            GALERÍA DE <span className="enfasis-verde">INSPIRACIONES</span> CON
            BRICKO
          </h2>
        </div>
        <div className="carrusel-inspiracion-home reveal-content">
          <div className="inspiracion-slide-imagen">
            <img
              src="/oficina.png"
              alt="Espacio Bricko"
              className="inspiracion-img-img"
            />
          </div>
          <div className="inspiracion-slide-texto">
            <h3 className="slide-titulo">MODULARIDAD Y CONFORT ACÚSTICO</h3>
            <p className="slide-parrafo">
              Nuestros bloques de celulosa prensada segmentan oficinas abiertas
              de forma rápida y limpia. La alta densidad garantiza un ambiente
              aislado del ruido.
            </p>
            <a
              href="#"
              className="slide-enlace-cta"
              onClick={(e) => {
                e.preventDefault();
                setVistaActual('aplicaciones');
              }}
            >
              Ver Aplicaciones Corporativas {'>'}
            </a>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="main-container">
      <div className="top-bar">
        <Truck size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
        <span>Envíos a todo el país</span>
      </div>

      <nav className={`barra-navegacion ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div
          className="contenedor-logo"
          onClick={() => setVistaActual('inicio')}
          style={{ cursor: 'pointer' }}
        >
          <img src={logoWhite} alt="Bricko" className="logo-img" />
        </div>

        <ul className={`enlaces-navegacion ${menuOpen ? 'activos' : ''}`}>
          {secciones.map((sec) => (
            <li
              key={sec.id}
              className={vistaActual === sec.id ? 'active-link' : ''}
              onClick={() => {
                setVistaActual(sec.id);
                setMenuOpen(false);
              }}
            >
              {sec.label}
            </li>
          ))}
        </ul>

        <div className="iconos-navegacion">
          <div className="contenedor-buscador">
            <input
              type="text"
              className={`entrada-buscador ${buscadorAbierto ? 'activa' : ''}`}
              placeholder="Buscar material..."
            />
            <Search
              size={22}
              strokeWidth={2.5}
              className="boton-icono"
              onClick={() => setBuscadorAbierto(!buscadorAbierto)}
            />
          </div>
          <ShoppingCart size={22} strokeWidth={2.5} className="boton-icono" />
          <button
            className="boton-hamburguesa"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      <main className="contenido-principal">{renderContenido()}</main>

      <footer className="footer">
        <div className="footer-overlay"></div>
        <div className="footer-container">
          <div className="footer-col left-col">
            <img src={logoWhite} alt="Bricko" className="footer-logo-img" />
            <p className="footer-slogan">
              Revolución Ecológica en Construcción
            </p>
          </div>
          <div className="footer-col center-col">
            <ul className="footer-links">
              <li>Preguntas Frecuentes</li>
              <li>Tiempos de Envío</li>
              <li>Garantía y Devoluciones</li>
              <li>Aviso de Privacidad</li>
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
