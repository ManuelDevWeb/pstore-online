import React, { useContext } from 'react';
// Importando Link para conectar nuestra aplicación
import { Link } from 'react-router-dom';
// Importando helmet
import { Helmet } from 'react-helmet';
// Importando estilos
import '../styles/components/Checkout.scss';
// Importando el context
import { AppContext } from '../context/AppContext';

// Creando componente
const Checkout = () => {
  // Destructurando los elementos del elemento AppContext con useContext
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  // Función para eliminar un producto del carrito
  const handleRemove = (product, i) => {
    removeFromCart(product, i)
  }

  // Función para mostrar la suma total de los elementos agregados al carrito
  const handleSumTotal = () => {
    // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
    const sum = cart.reduce((acumulatorSum, currentProduct) => (
      acumulatorSum + currentProduct.price
    ), 0)
    return sum;
  }

  return (
    <>
      <Helmet>
        <title>Store Online - Lista de Pedidos</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ManuelV16087195" />
        <meta name="twitter:creator" content="@ManuelV16087195" />
        <meta name="twitter:title" content="Store Online" />
        <meta name="twitter:description" content="Store Online" />
        <meta
          name="twitter:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:title" content="Store Online" />
        <meta property="og:description" content="Store Online" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
        />
        <meta property="og:url" content="https://cmvl.ml/" />
        <meta property="og:site_name" content="Store Online" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">

          {
            // Validando que hayan productos en el carrito de compras
            cart.length > 0 ? <h3>Lista de Pedidos: </h3> : <h3>Sin Pedidos...</h3>
          }

          {
            // Mapeando el cart
            cart.map((product, i) => (
              <div className="Checkout-item" key={product.title}>
                <div className="Checkout-element">
                  <h4>{product.title}</h4>
                  <span>${product.price}</span>
                </div>
                <button type="button" onClick={() => handleRemove(product, i)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            ))
          }
        </div>

        {
          // Validando que hayan productos en el carrito para mostar el total a pagar
          cart.length > 0 ?
            <div className="Checkout-sidebar">
              <h3>{`Precio Total: $${handleSumTotal()}`}</h3>
              <Link to="/checkout/information">
                <button type="button">Continuar pedido</button>
              </Link>
            </div>
            : null
        }

      </div>
    </>
  );
};

// Exportando componente
export default Checkout;
