import React, { Component } from "react";
import { connect } from "react-redux";

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
                        className="service-box"
                        onClick={() =>
                            this.handleSelectService("Place of Worship")
                        }
                    >
                        <span>Place of Worship</span>
                    </div>
                    <div
                        className="service-box"
                        onClick={() => this.handleSelectService("Temples")}
                    >
                        <span>Temples</span>
                    </div>
                    <div
                        className="service-box"
                        onClick={() =>
                            this.handleSelectService("Local Markets")
                        }
                    >
                        <span>Local Markets</span>
                    </div>
                </div>
            );
        } else if (this.state.category === "Professional") {
            services = (
                <div className="service-box-container">
                    <div
                        className="service-box"
                        onClick={() => this.handleSelectService("Doctors")}
                    >
                        <span>Doctors</span>
                    </div>
                    <div
                        className="service-box"
                        onClick={() => this.handleSelectService("Lawyers")}
                    >
                        <span>Lawyers</span>
                    </div>
                    <div
                        className="service-box"
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
                    <span onClick={this.clearCategory}>X TO GO BACK</span>
                )}
                {this.state.category ? (
                    <div />
                ) : (
                    <div className="service-box-container">
                        <div
                            className="service-box"
                            onClick={() => this.handleCategoryClick("Cultural")}
                        >
                            <span>Cultural</span>
                        </div>
                        <div
                            className="service-box"
                            onClick={() =>
                                this.handleCategoryClick("Professional")
                            }
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
