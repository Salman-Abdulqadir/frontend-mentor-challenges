import React from "react";
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const ip_data = useSelector((state) => state.ip_data.data);
  let info = ip_data.location.region;
  let coordinates = [parseFloat(ip_data.location.lat), parseFloat(ip_data.location.lng)];

  return (
    <div>
      <MapContainer
        className="map"
        center={coordinates}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            {info}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
