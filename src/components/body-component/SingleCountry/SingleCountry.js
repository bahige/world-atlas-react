import React, { Component } from "react";
import "./SingleCountry.css";
import Axios from "axios";
import Country from "../../Country";

class SingleCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  url = "https://api.npoint.io/027afbe0190c9042828c";

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    Axios.get(this.url).then((res) => {
      this.setState({
        countries: res.data["countries"],
      });
    });
    console.log("countries:" + this.state.countries);
  }

  render() {
    let id = this.props.match.params.id;
    console.log(id);
    const { countries } = this.state;
    const countriesList = countries.map((country) => {
      if (country.id === id) {
        return <Country key={country.id} country={country}></Country>;
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
