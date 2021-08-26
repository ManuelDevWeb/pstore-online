import React, { useContext } from 'react';
// Importando useHistory
import { useHistory } from 'react-router';
// Importando PayPal
import { PayPalButton } from 'react-paypal-button-v2';
// Importando estilos
import '../styles/components/Payment.scss';
// Importando context
import { AppContext } from '../context/AppContext';

// Creando componente
const Payment = () => {
  // Destructurando los elementos del elemento AppContext con useContext
  const { state: { cart, buyer }, addNewOrder } = useContext(AppContext);

  // Instanciando history
  const history = useHistory();

  // Configuración de opciones PayPal
  const paypalOptions = {
    cliendId: process.env.CLIENT_ID_APP,
    intent: 'capture',
    currency: 'USD'
  }

  // Estilos del boton de PayPal
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  // Función para almacenar la información del pago según el status
  const handlePaymentSuccess = (data) => {
    // console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }

      // Función para agregar la orden al state
      addNewOrder(newOrder);

      // Enviamos al usuario a la siguiente página
      history.push('/checkout/success');
    }
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
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido: </h3>

        {
          // Mapeando sobre el carrito de productos para mostrarlos al usuario
          cart.map((product) => (
            <div className="Payment-item" key={product.title}>
              <div className="Payment-element">
                <h4>{product.title}</h4>
                <span>${product.price}</span>
              </div>
            </div>
          ))
        }

        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>

      </div>

      <div>
        SideBar
      </div>
    </div>
  );
};

// Exportando componente
export default Payment;
