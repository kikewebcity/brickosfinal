import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// 1. Configuramos el PIN personalizado con el logo de Bricko
const brickoIcon = new L.Icon({
  iconUrl: '/logo-bricko-pin.png', // Asegúrate de subirlo a la carpeta public/
  iconSize: [50, 50], 
  iconAnchor: [25, 50], 
  popupAnchor: [0, -45],
});

const MapaBricko = () => {
  const position = [19.2215, -98.8872]; // Ubicación en Temamatla

  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      scrollWheelZoom={false} 
      className="mapa-bricko-render"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={position} icon={brickoIcon}>
        <Popup>
          <strong>Fábrica Bricko</strong> <br /> 
          Calle Mérida #58, Temamatla.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaBricko;
