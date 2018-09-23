import React, { Component } from "react";
import "./Main.css";
import { Element } from "react-scroll";
import Navbar from "../Navbar";
import Help from "../Help";
import AboutUs from "../AboutUs";
import Team from "../Team";
import SearchBox from "../SearchBox/";
import { Switch, Route } from "react-router-dom";
var ReactRotatingText = require("react-rotating-text");

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navclass: "home"
    };
  }
  render() {
    return (
      <div className="background-container">
        <div className="search-box-container">
          <SearchBox />
          <div className="text-carousel">
            <p>
              Find <span className="your-text">your </span>
              <ReactRotatingText
                className="rotating-text"
                items={["doctor. ", "lawyer. ", "accountant. ", "dentist. "]}
              />
            </p>
          </div>
        </div>

        <Navbar navclass={this.state.navclass} />
        <div className="bottom">
          <p>
            Never struggle to find services in your <span>home language.</span>
          </p>
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
