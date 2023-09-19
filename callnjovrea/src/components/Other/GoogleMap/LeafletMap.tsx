import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const customIcon = new Icon({
    iconUrl: require("../../../assets/png/marker.png"),
    iconSize: [38, 38],
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

const CustomLeafLetMap = () => (
  <MapContainer center={[48.8566, 2.3522]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <LocationMarker />
  </MapContainer>
);

export default CustomLeafLetMap;
