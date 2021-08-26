// Importando elementos de React
import { useState } from 'react';
// Importando el estado inicial
import initialState from '../initialState';

// Creando nuestro hook personalizado
const useInitialState = () => {
    // useState para manejar el estado
    const [state, setstate] = useState(initialState);

    // Funcionalidad para agregar elemento al carrito
    const addToCart = (payload) => {
        setstate({
            // Conservamos el state anterior
            ...state,
            // Agregamos al cart, lo que ya estaba en el cart y la nueva información que viene por el payload
            cart: [...state.cart, payload],
        });
    };

    // Funcionalidad para remover elemento del carrito
    const removeFromCart = (payload, indexToRemove) => {
        setstate({
            // Conservamos el state anterior
            ...state,
            // Agregamos al card, lo que ya estaba en el cart y solo devolvemos los que tengan id diferente al que viene por el indextToRemove
            cart: state.cart.filter(
                // El guión bajo es una convención que no afecta la funcionalidad. Se usa para avisar que ese parametro no se va a usar.
                (_item, indexCurrent) => indexCurrent !== indexToRemove
            ),
        });
    };

    // Funcionalidad para agregar al comprador
    const addToBuyer = (payload) => {
        setstate({
            // Conservamos el state anterior
            ...state,
            // Agregamos al buyer, lo que ya estaba en el buyer y la nueva información que viene por el payload
            buyer: [...state.buyer, payload],
        });
    };

    // Funcionalidad para agregar una nueva orden
    const addNewOrder = (payload) => {
        setstate({
            // Conservamos el state anterior
            ...state,
            // Agregamos al orders, lo que ya estaba en el orders y la nueva información que viene por el payload
            orders: [...state.orders, payload],
        });
    };

    // El custom hook retorna las funcionalidades que creamos
    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    };
};

// Exportando nuestro hook personalizado
export default useInitialState;