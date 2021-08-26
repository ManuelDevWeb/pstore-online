import React from 'react';
// Importando elementos de Google Maps
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/components/App.scss';

// Creando componente
const Map = () => {
    /*
    // Estilos del mapa
    const mapStyles = {
        height: '50vh',
        width: '100%'
    }


    // Locación del mapa
    const defaultCenter = {
        lat: data.lat,
        lng: data.lng
    }
    */


    return (
        /*
        // Para que nuestro Mapa funcione correctamente debemos hacer pago alternativa https://react-leaflet.js.org/docs/start-introduction/
        <LoadScript googleMapsApiKey={process.env.KEY_GOOGLE_MAPS}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />;
            </GoogleMap>
        </LoadScript>
        */

        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

// Exportando componente
export default Map;