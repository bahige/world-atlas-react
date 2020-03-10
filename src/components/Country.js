import React from "react";
import City from "./City";

function Country({ country }) {
  return (
    <div className="single-country-details" key={country.id}>
      <div className="first-row">
        <div className="more-country-info">
          <img src={country.flag} alt={country.country}></img>
          <div className="country-information">
            <span> {country.country}</span>
          </div>
        </div>
        <div className="more-country-info">
          <div className="country-information">
            <span> Capital City: {country.capital}</span>
          </div>
          <div className="country-information">
            <span> Currency: {country.currency}</span>
          </div>
          <div className="country-information">
            <span> Language: {country.language}</span>
          </div>
          <div className="country-information">
            <span> Continent: {country.continent}</span>
          </div>
        </div>
      </div>
      <div id="cities">
        {country.cities.map(city => (
          <City city={city} key={city.city}></City>
        ))}
      </div>
    </div>
  );
}

export default Country;
