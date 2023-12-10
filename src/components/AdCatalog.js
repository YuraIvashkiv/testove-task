import React, { useState, useEffect } from 'react';
import AdCard from './AdCard/AdCard';
import { fetchAdverts } from '../api';

const AdCatalog = () => {
  const [ads, setAds] = useState([]);
  const [visibleAds, setVisibleAds] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAdverts();
        setAds(data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };

    fetchData();
  }, []);

  const loadMoreAds = () => {
    setVisibleAds(prevVisibleAds => prevVisibleAds + 12);
  };

  return (
    <div className="ad-catalog">
      {ads.slice(0, visibleAds).map(ad => (
        <AdCard key={ad.id} {...ad} />
      ))}
      {visibleAds < ads.length && (
        <button onClick={loadMoreAds}>Load more</button>
      )}
    </div>
  );
};

export default AdCatalog;
