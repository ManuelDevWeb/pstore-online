import React, { useContext } from 'react';
// Importando context
import { AppContext } from '../context/AppContext';
// Importando componente Map
import Map from '../components/Map';
// Importando customHook
// import useGoogleAddress from '../hooks/useGoogleAddress';
// Importando estilos
import '../styles/components/Success.scss';

// Creando componente
const Success = () => {
  // Destructurando los elementos del elemento AppContext con useContext
  const { state: { buyer } } = useContext(AppContext);

  // Almacenando el valor de la locación que retorna el hook useGoogleAddress
  // const location = useGoogleAddress(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra 😀!`}</h2>
        <span>Tu pedido llegara en 3 días a tu dirección: </span>

        {/* Sección de Mapa implementando Google */}
        <div className="Success-map">
          <Map
          // data={location}
          />
        </div>
      </div>
    </div>
  );
};

// Exportando componente
export default Success;
