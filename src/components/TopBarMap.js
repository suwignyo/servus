import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

//actions
import { setLanguage, setService } from "../actions/userActions";

let serviceOptions = [
  { value: "Doctors", label: "Doctors" },
  { value: "Lawyers", label: "Lawyers" },
  { value: "Accountants", label: "Accountants" },
  { value: "Place of Worship", label: "Place of Worship" },
  { value: "Temples", label: "Temples" },
  { value: "Local Markets", label: "Local Markets" }
];

class TopBarMap extends Component {
  handleLanguageChange = ({ value }) => {
    this.props.setLanguage(value);
  };
  handleServiceChange = ({ value }) => {
    this.props.setService(value);
  };
  render() {
    return (
      <div className="top-bar-map">
        <div className="top-bar-location">
          <div>Location</div>
          <input className="map-location-input" value="111 College Street" />
        </div>
        <div className="top-bar-service" onClick={this.showModal}>
          <div>Service</div>
          <Select
            options={serviceOptions}
            onChange={this.handleServiceChange}
            defaultValue={this.props.serviceSelected}
          />
        </div>
        <div className="top-bar-language">
          <div>Language</div>
          <Select
            options={this.props.languageOptions}
            onChange={this.handleLanguageChange}
            defaultValue={this.props.languageSelected}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  languageOptions: state.user.languages,
  languageSelected: {
    value: state.user.languageSelected,
    label: state.user.languageSelected
  },
  serviceSelected: {
    value: state.user.serviceSelected,
    label: state.user.serviceSelected
  }
});

export default connect(
  mapStateToProps,
  { setLanguage, setService }
)(TopBarMap);
