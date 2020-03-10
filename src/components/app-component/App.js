import React from "react";
import Header from "../header-component/Header";
import Navbar from "../nav-bar/Navbar";
import Footer from "../footer-component/Footer";
import Body from "../body-component/Body";
import AsiaBody from "../body-component/AsiaBody";
import AfricaBody from "../body-component/AfricaBody";
import AmericaBody from "../body-component/AmericaBody";
import EuropeBody from "../body-component/EuropeBody";
import OceaniaBody from "../body-component/OceaniaBody";
import SingleCountry from "../body-component/SingleCountry/SingleCountry";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Body}></Route>
          <Route exact path="/africa" component={AfricaBody}></Route>
          <Route path="/africa/:id" component={SingleCountry}></Route>
          <Route exact path="/asia" component={AsiaBody}></Route>
          <Route path="/asia/:id" component={SingleCountry}></Route>
          <Route exact path="/america" component={AmericaBody}></Route>
          <Route path="/america/:id" component={SingleCountry}></Route>
          <Route exact path="/europe" component={EuropeBody}></Route>
          <Route path="/europe/:id" component={SingleCountry}></Route>
          <Route exact path="/oceania" component={OceaniaBody}></Route>
          <Route path="/oceania/:id" component={SingleCountry}></Route>
          <Route path="/:id" component={SingleCountry}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
