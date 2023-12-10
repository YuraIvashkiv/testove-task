import React from 'react';
import { Img } from './AdCard.styled';
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
      <Img src={img} alt={`${make} ${model}`} />
      <h2>{`${year} ${make} ${model}`}</h2>
      <p>{description}</p>
    </div>
  );
};

export default AdCard;
