import React, { Component } from "react";
import "../styles/Navbar.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Navbar extends Component {
  scrollToHome = () => {
    const options = {
      smooth: true
    };
    scroller.scrollTo("App", options);
  };

  scrollToTeam = () => {
    const options = {
      smooth: true
    };
    scroller.scrollTo("Team", options);
  };

  scrollToAboutUs = () => {
    const options = {
      smooth: true
    };
    scroller.scrollTo("AboutUs", options);
  };

  scrollToHelp = () => {
    const options = {
      smooth: true
    };
    scroller.scrollTo("Help", options);
  };

  render() {
    return (
      <div className="navbar">
        <div className="title" onClick={this.scrollToHome}>
          SERVUS
        </div>
        <div className="links">
          <div className="link" onClick={this.scrollToAboutUs}>
            ABOUT US
          </div>
          <div className="link" onClick={this.scrollToTeam}>
            TEAM
          </div>
          <div className="link" onClick={this.scrollToHelp}>
            HELP
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
