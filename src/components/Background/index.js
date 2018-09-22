import React, { Component } from "react";
import "./Background.css";
import backgroundimage from "../../assets/background-image.png";

export default class Background extends Component {
    render() {
        return (
            <div className="background-container">
                <img src={backgroundimage} alt="background" />
                <div className="bottom">
                    <p>Canada prides itself</p>
                </div>
            </div>
        );
    }
}
