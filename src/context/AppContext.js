import React from 'react';
// Importando el hook personalizado
import useInitialState from '../hooks/useInitialState';

// Creando el context para pasar información entre componentes sin usar props
export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    // Initial state contiene todo lo que retorna el useInitialState()
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
    );
};

// Exportando el Provider
export default AppProvider;
