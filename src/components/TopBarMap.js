import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

//actions
import { setLanguage } from "../actions/userActions";

class TopBarMap extends Component {
    handleLanguageChange = ({ value }) => {
        this.props.setLanguage(value);
    };
    render() {
        return (
            <div className="top-bar-map">
                <div className="top-bar-location">
                    <div>location</div>
                    <input value="111 College Street" />
                </div>
                <div className="top-bar-service">
                    <div>service</div>
                    <div>{this.props.serviceSelected}</div>
                </div>
                <div className="top-bar-language">
                    <div>language</div>
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
    serviceSelected: state.user.serviceSelected
});

export default connect(
    mapStateToProps,
    { setLanguage }
)(TopBarMap);
