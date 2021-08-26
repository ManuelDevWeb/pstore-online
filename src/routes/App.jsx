/* eslint-disable arrow-body-style */
// Importando React
import React from 'react';
// Importando elementos de React-router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Importando componentes
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
// Importando el provider definido en el context
import AppProvider from '../context/AppContext';

// Creando componente
const App = () => {
  return (
    // Envolvemos la aplicación dentro de nuestro provider definido en el context
    <AppProvider>
      {/* Encapsulando todas las rutas de nuestro aplicativo */}
      <BrowserRouter>
        <Layout>
          {/* Switch permite mostrar la primer ruta que coincida con la ruta elegida */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  );
};

// Exportando componente
export default App;
