import React, { Component } from "react";
import axios from "axios";
import "./Body.css";
import { Link } from "react-router-dom";

class AfricaBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  url = "https://api.myjson.com/bins/10k58h";

  componentDidMount() {
    axios.get(this.url).then(res => {
      this.setState({
        countries: res.data["countries"]
      });
    });
  }

  render() {
    const { countries } = this.state;

    const countriesList = countries.map(country => {
      if (country.continent === "America") {
        return (
          <Link
            to={"/america/" + country.id}
            style={{ textDecoration: "none" }}
            key={country.id}
          >
            <div className="single-country">
              <img src={country.flag} alt={country.country}></img>
              <div className="country-info">
                <span> {country.country}</span>
              </div>
            </div>
          </Link>
        );
      } else {
        return null;
      }
    });

    return <div className="container">{countriesList}</div>;
  }
}

export default AfricaBody;
