import React, { Component } from "react";
import "./SearchBox.css";
import { Link } from "@reach/router";

import SelectLanguage from "./SelectLanguage";
import SelectService from "./SelectService";

export default class index extends Component {
  render() {
    return (
      <div className="search-box">
        <div className="search-box-selects">
          <div>
            <p>Language</p>
            <SelectLanguage />
          </div>
          <div>
            <p>Service</p>
            <SelectService />
          </div>
          <div>
            <p>Location</p>
            <input className="input-box" />
          </div>
          <div className="find-button">
            <Link to="/search">
              <button className="search-button">FIND</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
