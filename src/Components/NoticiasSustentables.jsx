import React from 'react';
import '../App.css';

const NoticiasSustentables = () => {
  // Matriz de datos (Mockup Técnico) de noticias sobre sustentabilidad
  const noticias = [
    {
      id: 1,
      etiqueta: 'ECONOMÍA CIRCULAR',
      titulo: 'De residuo urbano a infraestructura: El ciclo de vida de la celulosa',
      extracto: 'Análisis técnico sobre cómo la revalorización de mermas de papel está reduciendo la huella de carbono en la industria de la construcción hasta en un 45%, transformando pasivos ambientales en activos arquitectónicos.',
      imagen: '/noticia2.jpg', // Imagen detectada en su carpeta public
      fecha: '18 Abril 2026'
    },
    {
      id: 2,
      etiqueta: 'DISEÑO ECOSUSTENTABLE',
      titulo: 'Biopolímeros y Acústica: El nuevo estándar en corporativos',
      extracto: 'La implementación de matrices de celulosa prensada en oficinas de planta abierta ha demostrado una mejora del 60% en la absorción acústica, superando a los paneles tradicionales de yeso y fibra de vidrio.',
      imagen: '/oficina.webp', 
      fecha: '12 Abril 2026'
    },
    {
      id: 3,
      etiqueta: 'NORMATIVA Y MERCADO',
      titulo: 'Nuevas regulaciones ISO para materiales de construcción en seco',
      extracto: 'Las normativas internacionales endurecen los límites de emisiones CO2. Los bloques ecosustentables se perfilan como la principal solución para que las constructoras cumplan con las cuotas ambientales de 2030.',
      imagen: '/recamara.webp', 
      fecha: '05 Abril 2026'
    }
  ];

  return (
    <div className="noticias-estaticas-seccion">
      {/* CABECERA DE LA SECCIÓN */}
      <div className="noticias-cabecera">
        <h1 className="noticias-titulo">ACTUALIDAD SUSTENTABLE</h1>
        <p className="noticias-subtitulo">
          Avances técnicos, normativas y casos de éxito en la implementación 
          de la economía circular dentro del sector de la construcción y diseño de interiores.
        </p>
      </div>

      {/* CUADRÍCULA DE NOTICIAS */}
      <div className="noticias-cuadricula-estatica">
        {noticias.map((noticia) => (
          <article key={noticia.id} className="noticia-tarjeta-solida">
            <div className="noticia-imagen-contenedor">
              <img 
                src={noticia.imagen} 
                alt={noticia.titulo} 
                loading="lazy"
              />
            </div>
            <div className="noticia-contenido">
              <span className="noticia-etiqueta-tecnica">{noticia.etiqueta}</span>
              <h2 className="noticia-titular">{noticia.titulo}</h2>
              <p className="noticia-extracto">{noticia.extracto}</p>
              <div className="noticia-pie">
                <span className="noticia-fecha">{noticia.fecha}</span>
                <button className="noticia-boton-leer">Leer Artículo {'>'}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NoticiasSustentables;
