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

    handleMarkerClick = id => {
        this.setActive(id);
        let elem_id = this.state.activeCard.toString();
        const options = {
            smooth: true
        };
        scroller.scrollTo(elem_id, options);
    };

    setActive = id => {
        this.setState({
            activeMarker: id,
            activeCard: id,
            toggleAnimation: !this.state.toggleAnimation
        });
    };

    render() {
        let listings;
        switch (this.props.serviceSelected) {
            case "Doctors":
                listings = this.props.doctors;
                break;
            case "Lawyers":
                listings = this.props.lawyers;
            default:
                break;
        }
        return (
            <div className="main-map-container">
                <Navbar navclass={this.state.navclass} />
                <div className="main-map">
                    {/* <TopBarMap /> */}
                    {/* temporary search box below */}
                    {/* <SearchForm handleSearchSubmit={this.handleSearchSubmit} /> */}
                    {listings && (
                        <MapComponent
                            listings={listings}
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
                        {listings &&
                            listings.map((elem, i) => (
                                <Element name={elem.id}>
                                    <MapCard
                                        setActive={this.setActive}
                                        key={i}
                                        id={elem.id}
                                        data={elem}
                                        activeCard={
                                            elem.id === this.state.activeCard
                                                ? true
                                                : false
                                        }
                                        ad={elem.id === 1 ? true : false}
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
    doctors: state.fetch.doctors,
    lawyers: state.fetch.lawyers,
    serviceSelected: state.user.serviceSelected
});

export default connect(
    mapStateToProps,
    null
)(MainMap);
