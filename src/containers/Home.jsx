import React from 'react';
// Importando Helmet
import { Helmet } from 'react-helmet';
// Importando componente
import Products from '../components/Products';


// Creando componente
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Store Online - Productos</title>
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
      <Products />
    </>
  );
};

// Exportando componente
export default Home;
