import React, { useRef, useContext } from 'react';
// Importando Link para conectar nuestra aplicación
import { Link, useHistory } from 'react-router-dom';
// Importando estilos
import '../styles/components/Information.scss';
// Importando context
import { AppContext } from '../context/AppContext';

// Creando componente
const Information = () => {
  // Destructurando los elementos del elemento AppContext con useContext
  const { state: { cart }, addToBuyer } = useContext(AppContext);

  // Haciendo referencia a nuestro formulario con useRef
  const form = useRef(null);

  // Instanciando history
  const history = useHistory();

  // Función para proceder a pagar nuestros productos
  const handleSubmit = () => {
    // Capturando la información del formulario utilizando FormData
    const formData = new FormData(form.current);

    // Estructura del objeto comprador y su respectiva información extraida del formulario.
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone')
    }

    // Función para agregar la información al comprador
    addToBuyer(buyer);

    // Enviamos al usuario a la siguiente página
    history.push('/checkout/payment');
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de Contacto: </h2>
        </div>

        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo Postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>

        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
              Regresar
            </Link>
          </div>
          <Link to="/checkout/payment">
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>Pagar</button>
            </div>
          </Link>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Pedido:</h3>

        {
          // Mapeando sobre el carrito de productos para mostrarlos al usuario
          cart.map((product) => (
            <div className="Information-item" key={product.title}>
              <div className="Information-element">
                <h4>{product.title}</h4>
                <span>{product.price}</span>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

// Exportando componente
export default Information;
