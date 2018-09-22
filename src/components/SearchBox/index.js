import React, { Component } from "react";
import "./SearchBox.css";

export default class index extends Component {
    render() {
        return (
            <div className="search-box">
                <div className="language-box">
                    <p>Language</p>
                    <p>English</p>
                </div>
                <div>
                    <p>Service</p>
                    <p>Boxes</p>
                </div>
                <div>
                    <p>Location</p>
                    <p>Input</p>
                </div>
                <div>
                    <p>Find</p>
                </div>
            </div>
        );
    }
}
