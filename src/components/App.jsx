import React, { useEffect, useState } from 'react';
import AdCatalog from './AdCatalog';
import axios from 'axios';

const App = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    axios.get('https://650995c3f6553137159bb321.mockapi.io/').then(response => {
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
