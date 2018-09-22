import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { testingRedux } from "./actions/userActions";
import Main from "./components/Main/";

class App extends Component {
    componentDidMount() {
        console.log("Hi");
        this.props.testingRedux("asdggs");
    }
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.test
});

export default connect(
    mapStateToProps,
    { testingRedux }
)(App);
