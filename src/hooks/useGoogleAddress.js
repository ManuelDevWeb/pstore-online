// Importando elementos de React
import { useState, useEffect } from 'react';
// Importando Axios
import axios from 'axios';

// Creando nuestro hook personalizado
const useGoogleAddress = (address) => {
    // useState para manejar el estado
    const [map, setMap] = useState({});

    // Url para la dirección
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.KEY_GOOGLE_MAPS}`;

    // useEffect se ejecuta cuando se actualice algo
    useEffect(async() => {
        // Obteniendo la información de la API
        const response = await axios(API);
        // Seteamos el state de map
        setMap(response.data.results[0].geometry.location);
    }, []);

    return map;
};

// Exportando nuestro hook personalizado
export default useGoogleAddress;