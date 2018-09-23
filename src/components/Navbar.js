import React, { Component } from "react";
import "../styles/Navbar.css";
import { scroller } from "react-scroll";
import classNames from "classnames";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navclass: this.props.navclass
    };
  }
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
      <div
        className={classNames(
          { navbar: this.state.navclass === "home" },
          { navclass: this.props.navclass === "map" }
        )}
      >
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
          <div className="link help-link" onClick={this.scrollToHelp}>
            JOIN
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
