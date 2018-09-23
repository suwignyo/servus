import React, { Component } from "react";
import MapComponent from "./map";
import MapCard from "./MapCard";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class MainMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAnimation: false,
      activeMarker: null,
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwRlvwiZDMwFNadu7tARjDyqqPDVZ5whw&v=3.exp&libraries=geometry,drawing,places`,
      navclass: "map"
    };
  }
  handleMarkerClick = id => {
    this.setState({
      activeMarker: id,
      activeCard: id,
      toggleAnimation: !this.state.toggleAnimation
    });
    let elem_id = this.state.activeCard.toString();
    const options = {
      smooth: true
    };
    scroller.scrollTo(elem_id, options);
  };

  render() {
    return (
      <div className="main-map-container">
        <Navbar navclass={this.state.navclass} />
        <div className="main-map">
          {/* <TopBarMap /> */}
          {/* temporary search box below */}
          {/* <SearchForm handleSearchSubmit={this.handleSearchSubmit} /> */}
          {this.props.listings && (
            <MapComponent
              listings={this.props.listings}
              googleMapURL={this.state.googleMapURL}
              loadingElement={<div />}
              containerElement={<div className="map-container" />}
              mapElement={<div style={{ height: `100%` }} />}
              handleMarkerClick={this.handleMarkerClick}
              activeMarker={this.state.activeMarker}
              toggleAnimation={this.state.toggleAnimation}
              toggleMarker={this.toggleMarker}
            />
          )}
          <div className="map-listings-container">
            {this.props.listings &&
              this.props.listings.map((elem, i) => (
                <Element name={elem.id}>
                  <MapCard
                    key={i}
                    id={elem.id}
                    data={elem}
                    activeCard={
                      elem.id === this.state.activeCard ? true : false
                    }
                  />
                </Element>
              ))}
            {this.state.noResults && (
              <div className="no-results">No Results</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.fetch.results
});

export default connect(
  mapStateToProps,
  null
)(MainMap);
