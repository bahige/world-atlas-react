import React from "react";

function City({ city }) {
  return (
    <div className="city-info">
      <img src={city.photo} alt={city.city}></img>
      <div className="city-information">
        <span> {city.city}</span>
      </div>
    </div>
  );
}

export default City;
