import React, { Component } from "react";
import MapComponent from "./map";
import MapCard from "./MapCard";
import { connect } from "react-redux";
// import SearchForm from "./SearchForm";
// import { getAllListings, getAllListingsFromQuery } from "../ajax/listings"
import TopBarMap from "./TopBarMap";

class MainMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAnimation: false,
            activeMarker: null,
            googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwRlvwiZDMwFNadu7tARjDyqqPDVZ5whw&v=3.exp&libraries=geometry,drawing,places`
        };
    }
    handleMarkerClick = id => {
        this.setState({
            activeMarker: id,
            activeCard: id,
            toggleAnimation: !this.state.toggleAnimation
        });
    };

    stopBounceAnimation = () =>{
      this.setState({activeMarker: null, toggleAnimation: false})
    }

    render() {
        return (
            <div className="main-map">
                <TopBarMap />
                {/* temporary search box below */}
                {/* <SearchForm handleSearchSubmit={this.handleSearchSubmit} /> */}
                {this.props.listings && (
                    <MapComponent
                        listings={this.props.listings}
                        googleMapURL={this.state.googleMapURL}
                        loadingElement={<div />}
                        containerElement={
                            <div
                                className="map-container"
                                onClick={this.stopBounceAnimation}
                            />
                        }
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
                            <MapCard key={i} id={elem.id} data={elem} activeCard={ (elem.id === this.state.activeCard) ? true: false }/>
                        ))}
                    {this.state.noResults && (
                        <div className="no-results">No Results</div>
                    )}
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
