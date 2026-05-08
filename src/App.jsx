import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './App.css';

// Componentes
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Productos from './Components/Productos';
import Ventaja from './Components/Ventaja';
import NoticiasSustentables from './Components/NoticiasSustentables';
import Contacto from './Components/Contacto';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes';
import AvisoPrivacidad from './Components/AvisoPrivacidad';
import TiemposEnvio from './Components/TiemposEnvio';

// Iconos y Assets
import { ShoppingCart, Truck, Menu, X } from 'lucide-react';
import logoBricko from './assets/logobricko.png';
import logoWhite from './assets/logowhite.png';
import iconYt from './assets/iconoyoutube.png';
import iconInsta from './assets/iconoinstagram.png';
import iconFb from './assets/iconofacebook.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const secciones = [
    { path: '/', label: 'Inicio' },
    { path: '/nosotros', label: 'Quienes somos' },
    { path: '/productos', label: 'Productos & aplicaciones' },
    { path: '/ventajas', label: 'Ventajas' },
    { path: '/noticias', label: 'Bricko news' },
    { path: '/contacto', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="main-container">
        
        <div className="top-bar">
          <Truck size={16} strokeWidth={2.5} style={{ marginRight: '8px' }} />
          <span>Envíos a todo el país</span>
        </div>

        <nav className={`barra-navegacion ${scrolled ? 'navbar-scrolled' : ''}`}>
          <NavLink to="/" className="contenedor-logo" onClick={() => setMenuOpen(false)}>
            <img src={logoBricko} alt="Bricko" className="logo-img" />
          </NavLink>

          <ul className={`enlaces-navegacion ${menuOpen ? 'activos' : ''}`}>
            {secciones.map((sec) => (
              <li key={sec.path}>
                <NavLink 
                  to={sec.path}
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {sec.label}
                </NavLink>
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

        <main className="contenido-principal">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/ventajas" element={<Ventaja />} />
            <Route path="/noticias" element={<NoticiasSustentables />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/faq" element={<PreguntasFrecuentes />} />
            <Route path="/privacidad" element={<AvisoPrivacidad />} />
            <Route path="/envios" element={<TiemposEnvio />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-col left-col">
              <img src={logoWhite} alt="Bricko" className="footer-logo-img" loading="lazy" />
              <p className="footer-slogan">Revolución ecológica en construcción</p>
            </div>

            <div className="footer-col center-col">
              <ul className="footer-links">
                <li><NavLink to="/faq">Preguntas frecuentes</NavLink></li>
                <li><NavLink to="/envios">Tiempos de envío</NavLink></li>
                <li><NavLink to="/privacidad">Aviso de privacidad</NavLink></li>
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
    </Router>
  );
}

export default App;
