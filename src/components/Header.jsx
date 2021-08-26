import React, { useContext } from 'react';
// Importando Link para conectar nuestra aplicación
import { Link } from 'react-router-dom';
// Importando estilos
import '../styles/components/Header.scss';
// Importando el context
import { AppContext } from '../context/AppContext';

// Creando componente
const Header = () => {
    // Destructurando los elementos del elemento AppContext con useContext
    const { state: { cart } } = useContext(AppContext);

    return (
        <div className="Header">
            <h1 className="Header-title">
                <Link to="/">
                    Store Online
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket" />
                </Link>
                {
                    // Función para mostrar cuantos productos están activos en el carrito
                    cart.length > 0
                        ? <div className="Header-alert">{cart.length}</div>
                        : null
                }
            </div>
        </div>
    );
};

// Exportando componente
export default Header;