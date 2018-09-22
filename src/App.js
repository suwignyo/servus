import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { testingRedux } from "./actions/userActions";
import MainMap from "./components/MainMap";



class App extends Component {
    componentDidMount() {
        console.log("Hi");
        this.props.testingRedux("asdggs");
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Servus</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <div>
                <MainMap />
                </div>
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
