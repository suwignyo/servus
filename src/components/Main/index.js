import React, { Component } from "react";
import "./Main.css";

import SearchBox from "../SearchBox/";

export default class Main extends Component {
    render() {
        return (
            <div className="background-container">
                <div className="search-box-container">
                    <SearchBox />
                </div>
                <div className="bottom">
                    <p>Canada prides itself</p>
                </div>
            </div>
        );
    }
}
