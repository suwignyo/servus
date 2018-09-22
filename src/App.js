import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { testingRedux } from "./actions/userActions";
import Main from "./components/Main/";
import MainMap from "./components/MainMap";

class App extends Component {
  componentDidMount() {
    console.log("Hi");
    this.props.testingRedux("asdggs");
  }
  render() {
    return (
      <div className="App">
        <Main />
        <MainMap>
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
