import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Main from "./components/Main/";
import MainMap from "./components/MainMap";
import { Router } from "@reach/router";

class App extends Component {
    componentDidMount() {}
    render() {
        return (
            <div className="App">
                <Router>
                    <Main path="/" />
                    <MainMap path="/search" />
                </Router>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(App);
