import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import '../App.css';

const Noticias = () => {
  const articulos = [
    {
      id: 1,
      categoria: "Sustentabilidad estatal",
      titulo: "Reciclaje y reutilización: pilares de la nueva economía",
      extracto: "Análisis sobre las políticas actuales de revalorización de materiales y el impacto del reciclaje en el bienestar social.",
      fuente: "Secretaría de Bienestar",
      link: "https://www.bienestar.gob.mx/sibien/index.php/sustentabilidad/20-sustentabilidad/29-reciclaje-y-reutilizacion",
      imagen: "/Reciclaje.webp" // Usa una imagen de ambiente o planta de reciclaje
    },
    {
      id: 2,
      categoria: "Gestión de residuos",
      titulo: "Clasificación y valoración de los residuos sólidos urbanos (RSU)",
      extracto: "Guía técnica sobre la gestión integral de residuos y cómo la industria de la construcción puede aprovechar los RSU como materia prima.",
      fuente: "SEMARNAT",
      link: "https://www.gob.mx/semarnat/acciones-y-programas/clasificacion-reciclaje-y-valoracion-de-los-rsu",
      imagen: "/clasificacion.webp" // Imagen de bloques o residuos clasificados
    },
    {
      id: 3,
      categoria: "Educación ambiental",
      titulo: "Las tres erres mágicas: reducir, reutilizar y reciclar",
      extracto: "Estrategias prácticas para implementar el consumo responsable y la optimización de recursos en proyectos arquitectónicos modernos.",
      fuente: "CONANP",
      link: "https://www.gob.mx/conanp/es/articulos/las-tres-erres-magicas?idiom=es",
      imagen: "/educacion_ambiental.webp" // Imagen conceptual de economía circular
    }
  ];

  return (
    <div className="noticias-pagina-maestra">
      {/* CABECERA ESTILO IMAGE_79 */}
      <section className="noticias-hero">
        <h1 className="actualidad-titulo">Actualidad sustentable</h1>
        <p className="actualidad-subtitulo">
          Avances técnicos, normativas y casos de éxito en la implementación de la economía circular dentro del sector de la construcción.
        </p>
      </section>

      {/* GRID DE NOTICIAS */}
      <section className="noticias-cuadricula">
        {articulos.map((art) => (
          <div key={art.id} className="noticia-tarjeta">
            <div className="noticia-imagen-wrapper">
              <img src={art.imagen} alt={art.titulo} className="noticia-img-src" />
              <div className="noticia-fuente-tag">{art.fuente}</div>
            </div>
            
            <div className="noticia-cuerpo">
              <span className="noticia-tag-verde">{art.categoria}</span>
              <h2 className="noticia-titulo-card">{art.titulo}</h2>
              <p className="noticia-texto-extracto">{art.extracto}</p>
              
              <a href={art.link} target="_blank" rel="noopener noreferrer" className="noticia-link-boton">
                Leer artículo completo <ExternalLink size={18} style={{marginLeft: '8px'}} />
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Noticias;
