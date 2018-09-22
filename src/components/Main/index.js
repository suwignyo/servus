import React, { Component } from "react";
import "./Main.css";
import { Element } from "react-scroll";
import Navbar from "../Navbar";
import Help from "../Help";
import AboutUs from "../AboutUs";
import Team from "../Team";
import SearchBox from "../SearchBox/";
export default class Main extends Component {
  render() {
    return (
      <div className="background-container">
        <div className="search-box-container">
          <SearchBox />
        </div>
        <Navbar />
        <div className="bottom">
          <p>Canada prides itself</p>
        </div>
        <Element name="AboutUs" className="element">
          <AboutUs />
        </Element>
        <Element name="Team" className="element">
          <Team />
        </Element>
        <Element name="Help" className="element">
          <Help />
        </Element>
      </div>
    );
  }
}
