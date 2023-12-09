import React, { useEffect, useState } from 'react';
import AdCatalog from '../components/Home-page/AdCatalog';
import axios from 'axios';

const App = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get('URL_ДО_ВАШОГО_MOCKAPI_RESOURCE').then(response => {
      setAds(response.data);
    });
  }, []);

  return (
    <div className="app">
      <h1>Car Rental Service</h1>
      <AdCatalog ads={ads} />
    </div>
  );
};

export default App;
