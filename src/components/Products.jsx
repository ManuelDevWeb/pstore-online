// Importando elementos de React
import React, { useContext } from 'react'
// Importando componente
import Product from './Product';
// Importando estilos
import '../styles/components/Products.scss';
// Importando el context
import { AppContext } from '../context/AppContext';

// Creando componente
const Products = () => {
    // Destructurando los elementos del elemento AppContext con useContext
    const { state: { products }, addToCart } = useContext(AppContext);

    // Función que maneja agregar al carrito
    const handleAddToCart = (product) => {
        addToCart(product)
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    // Iterando sobre los productos
                    products.map((product) => (
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                    ))
                }
            </div>
        </div>
    )
}

// Exportando componente
export default Products
