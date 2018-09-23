import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/Map.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class MapCard extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDownVisible: false };
  }

  componentDidMount() {
    console.log(this.props.data.img);
  }
  handleClick = () => {
    this.setState({ dropDownVisible: !this.state.dropDownVisible });
  };
  render() {
    let dropdown = (
      <div className="dropdown-info">
        <div className="office">
          <strong>{this.props.data.office}</strong>
        </div>
        <div className="details address">
          <strong>Address:</strong> {this.props.data.address}
        </div>
        <div className="details hours">
          <strong>Hours:</strong> {this.props.data.hours}
        </div>
        <div className="details phone">
          <strong>Phone:</strong> {this.props.data.phone}
        </div>
        <div className="details website">
          <strong>Website:</strong> {this.props.data.website}
        </div>
        <div className="direct-container">
          <button className="direct-button">Direct Me</button>
        </div>
      </div>
    );
    return (
      <div >
        <div className="listing-map-card" onClick={this.handleClick} className={(this.props.activeCard) ? "activeCard":"defaultCard"}>
          {/* {this.props.activeCard && "this is the active card"} */}
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
              <div className="distance-away">{this.props.data.distance}</div>
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
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.state.dropDownVisible ? dropdown : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default MapCard;
