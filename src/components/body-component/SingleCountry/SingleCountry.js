import React, { Component } from "react";
import "./SingleCountry.css";
import Axios from "axios";

class SingleCountry extends Component {
  state = {
    countries: []
  };

  url = "https://api.myjson.com/bins/10k58h";

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    Axios.get(this.url).then(res => {
      this.setState({
        countries: res.data["countries"]
      });
    });
    console.log("countries:" + this.state.countries);
  }

  render() {
    let id = this.props.match.params.id;
    console.log(id);
    const { countries } = this.state;
    const countriesList = countries.map(country => {
      if (country.id === id) {
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
                <div className="city-info" key={city.city}>
                  <img src={city.photo} alt={city.city}></img>
                  <div className="city-information">
                    <span> {city.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div id="single-country">
        <div>{countriesList}</div>
      </div>
    );
  }
}

export default SingleCountry;
