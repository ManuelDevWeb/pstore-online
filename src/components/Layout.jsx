import React from 'react';
// Importando componente
import Header from './Header';
import Footer from './Footer';
// Importando estilos
import '../styles/components/Layout.scss';

// Creando componente
const Layout = ({ children }) => {
    return (
        <div className="Main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

// Exportando componente
export default Layout;
