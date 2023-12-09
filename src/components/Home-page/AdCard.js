import React from 'react';

const AdCard = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  return (
    <div className="ad-card">
      <img src={img} alt={`${make} ${model}`} />
      <h2>{`${year} ${make} ${model}`}</h2>
      <p>{description}</p>
      {/* Додайте інші дані, які вам потрібні */}
    </div>
  );
};

export default AdCard;
