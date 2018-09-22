import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Map.css";

class MapCard extends Component {
  componentDidMount() {
    console.log(this.props.data.img);
  }
  render() {
    return (
      <div>
        <div className="listing-map-card">
          <div className="listing-map-img-container">
            <img
              className="prof-pic"
              src={this.props.data.img}
              alt="doctor image"
            />
          </div>
          <div className="listing-map-info-container">
            <div className="doctor-distance">
              <div className="doctor-name">{this.props.data.name}</div>
              <div className="distance-away">500m</div>
            </div>
            <div className="service-language">
              <div className="service">{this.props.data.service}</div>
              <div className="languages-heading">Languages</div>
            </div>
            <div className="languages-spoken">
              {this.props.data.languages.join(", ")}
            </div>
            <div className="office">{this.props.data.office}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapCard;
