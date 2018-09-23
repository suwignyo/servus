import React, { Component } from "react";
import { connect } from "react-redux";
// import cultural from "../../assets/community.png";
//actions
import { setService } from "../../actions/userActions";

class SelectService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      serviceActive: {
        placeOfWorship: false,
        temples: false,
        localMarkets: false,
        doctors: false,
        lawyers: false,
        accountants: false
      }
    };
  }
  handleCategoryClick = category => {
    this.setState({ category });
  };
  handleSelectService = service => {
    this.props.setService(service);
    switch (service) {
      case "Place of Worship":
        this.setState({
          serviceActive: {
            placeOfWorship: true,
            temples: false,
            localMarkets: false,
            doctors: false,
            lawyers: false,
            accountants: false
          }
        });
        break;
      case "Temples":
        this.setState({
          serviceActive: {
            placeOfWorship: false,
            temples: true,
            localMarkets: false,
            doctors: false,
            lawyers: false,
            accountants: false
          }
        });
        break;
      case "Local Markets":
        this.setState({
          serviceActive: {
            placeOfWorship: false,
            temples: false,
            localMarkets: true,
            doctors: false,
            lawyers: false,
            accountants: false
          }
        });
        break;
      case "Doctors":
        this.setState({
          serviceActive: {
            placeOfWorship: false,
            temples: false,
            localMarkets: false,
            doctors: true,
            lawyers: false,
            accountants: false
          }
        });
        break;
      case "Lawyers":
        this.setState({
          serviceActive: {
            placeOfWorship: false,
            temples: false,
            localMarkets: false,
            doctors: false,
            lawyers: true,
            accountants: false
          }
        });
        break;
      case "Accountants":
        this.setState({
          serviceActive: {
            placeOfWorship: false,
            temples: false,
            localMarkets: false,
            doctors: false,
            lawyers: false,
            accountants: true
          }
        });
        break;
      default:
        break;
    }
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
            className={`service-box worship ${
              this.state.serviceActive.placeOfWorship ? "service-selected" : ""
            }`}
            onClick={() => this.handleSelectService("Place of Worship")}
          >
            <span>Place of Worship</span>
          </div>
          <div
            className={`service-box temples ${
              this.state.serviceActive.temples ? "service-selected" : ""
            }`}
            onClick={() => this.handleSelectService("Temples")}
          >
            <span>Temples</span>
          </div>
          <div
            className={`service-box markets ${
              this.state.serviceActive.localMarkets ? "service-selected" : ""
            }`}
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
            className={`service-box doctors ${
              this.state.serviceActive.doctors ? "service-selected" : ""
            }`}
            onClick={() => this.handleSelectService("Doctors")}
          >
            <span>Doctors</span>
          </div>
          <div
            className={`service-box lawyers ${
              this.state.serviceActive.lawyers ? "service-selected" : ""
            }`}
            onClick={() => this.handleSelectService("Lawyers")}
          >
            <span>Lawyers</span>
          </div>
          <div
            className={`service-box accountants ${
              this.state.serviceActive.accountants ? "service-selected" : ""
            }`}
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
            <i class="far fa-times-circle" />
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
