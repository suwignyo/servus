import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

//actions
import { setLanguage } from "../../actions/userActions";

class SelectLanguage extends Component {
    handleLanguageChange = ({ value }) => {
        this.props.setLanguage(value);
    };
    render() {
        return (
            <div>
                <Select
                    options={this.props.languageOptions}
                    onChange={this.handleLanguageChange}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    languageOptions: state.user.languages
});

export default connect(
    mapStateToProps,
    { setLanguage }
)(SelectLanguage);
