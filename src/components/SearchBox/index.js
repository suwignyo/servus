import React, { Component } from "react";
import "./SearchBox.css";

import SelectLanguage from "./SelectLanguage";
import SelectService from "./SelectService";

export default class index extends Component {
    render() {
        return (
            <div className="search-box">
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
                    <input />
                </div>
                <div className="find-button">
                    <p>Find</p>
                </div>
            </div>
        );
    }
}
