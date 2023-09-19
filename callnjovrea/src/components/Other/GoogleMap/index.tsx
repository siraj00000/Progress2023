import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker: React.FC<MarkerProps> = ({ lat, lng }) => (
  <div className="marker" data-lat={lat} data-lng={lng}>
    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
      <FaMapMarkerAlt />
    </div>
  </div>
);

const GoogleMap: React.FC = () => {
  const mapOptions = {
    center: {
      lat: 30.3753, // Latitude of the map center
      lng: 69.3451, // Longitude of the map center
    },
    zoom: 12,
  };

  return (
    <div className="md:h-600 h-178 w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDojZjPyAI0BNSxM9RxW0PeqOaiRU39yRw" }} // Replace with your own Google Maps API key
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        children={
          <Marker
            lat={30.3753} // Latitude of the marker
            lng={69.3451} // Longitude of the marker
          />
        }
      />
    </div>
  );
};

export default GoogleMap;
