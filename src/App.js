import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { testingRedux } from "./actions/userActions";
import Navbar from "./components/Navbar";
import Help from "./components/Help";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class App extends Component {
  componentDidMount() {
    console.log("Hi");
    this.props.testingRedux("asdggs");
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1 className="App-title">Welcome to Servus</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Element name="AboutUs" className="element">
          <AboutUs />
        </Element>
        <Element name="Team" className="element">
          <Team />
        </Element>
        <Element name="Help" className="element">
          <Help />
        </Element>
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
