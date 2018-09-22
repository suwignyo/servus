import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { testingRedux } from "./actions/userActions";
import Background from "./components/Background/";

class App extends Component {
    componentDidMount() {
        console.log("Hi");
        this.props.testingRedux("asdggs");
    }
    render() {
        return (
            <div className="App">
                <Background />
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
