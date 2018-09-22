import React, { Component } from "react";
import { connect } from "react-redux";
// import cultural from "../../assets/community.png";
//actions
import { setService } from "../../actions/userActions";

class SelectService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }
  handleCategoryClick = category => {
    this.setState({ category });
  };
  handleSelectService = service => {
    this.props.setService(service);
  };
  clearCategory = () => {
    this.setState({ category: "" });
  };
  render() {
    let services;
    if (this.state.category === "Cultural") {
      services = (
        <div className="service-box-container">
          <div
            className="service-box worship"
            onClick={() => this.handleSelectService("Place of Worship")}
          >
            <span>Place of Worship</span>
          </div>
          <div
            className="service-box temples"
            onClick={() => this.handleSelectService("Temples")}
          >
            <span>Temples</span>
          </div>
          <div
            className="service-box markets"
            onClick={() => this.handleSelectService("Local Markets")}
          >
            <span>Local Markets</span>
          </div>
        </div>
      );
    } else if (this.state.category === "Professional") {
      services = (
        <div className="service-box-container">
          <div
            className="service-box doctors"
            onClick={() => this.handleSelectService("Doctors")}
          >
            <span>Doctors</span>
          </div>
          <div
            className="service-box lawyers"
            onClick={() => this.handleSelectService("Lawyers")}
          >
            <span>Lawyers</span>
          </div>
          <div
            className="service-box accountants"
            onClick={() => this.handleSelectService("Accountants")}
          >
            <span>Accountants</span>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.state.category && (
          <div className="x-button" onClick={this.clearCategory}>
            X
          </div>
        )}
        {this.state.category ? (
          <div />
        ) : (
          <div className="service-box-container">
            <div
              className="service-box cultural"
              onClick={() => this.handleCategoryClick("Cultural")}
            >
              <span>Cultural</span>
            </div>
            <div
              className="service-box professional"
              onClick={() => this.handleCategoryClick("Professional")}
            >
              <span>Professional</span>
            </div>
          </div>
        )}

        {this.state.category && services}
      </div>
    );
  }
}

export default connect(
  null,
  { setService }
)(SelectService);
