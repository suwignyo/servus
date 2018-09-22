import React, { Component } from "react";
import MapComponent from "./map";
import MapCard from "./MapCard";
import { connect } from "react-redux";
// import SearchForm from "./SearchForm";
// import { getAllListings, getAllListingsFromQuery } from "../ajax/listings"

class MainMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleAnimation: false,
            activeMarker: null,
            googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyCwRlvwiZDMwFNadu7tARjDyqqPDVZ5whw&v=3.exp&libraries=geometry,drawing,places`
        };
    }

    // handleSearchSubmit = (queryObj) => {
    //   getAllListingsFromQuery(queryObj)
    //     .then(listings => {
    //       const noResults = listings.length === 0;
    //       this.setState({
    //         listings,
    //         noResults,
    //       })
    //     })
    // }

    toggleMarker = key => {
        this.handleMarkerClick(key);
        this.setState({ showListingBox: true, clickedMarker: true });
    };

    removeListingBoxFromMap = () => {
        const clickedMarker = this.state.clickedMarker;
        if (clickedMarker === true) {
            this.setState({ clickedMarker: false });
        } else {
            this.setState({ showListingBox: false });
        }
    };

    handleMarkerClick = key => {
        this.setState({
            activeMarker: key,
            toggleAnimation: true
        });
    };

    // componentDidMount(){
    //   document.title = "Map View | Kiro";
    //   getAllListings()
    //   .then(listings => {
    //     this.setState({
    //       listings
    //     })
    //   })
    // }

    componentDidMount() {
        console.log(this.props.listings);
    }

    render() {
        return (
            <div>
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
                                onClick={this.removeListingBoxFromMap}
                            />
                        }
                        mapElement={<div style={{ height: `100%` }} />}
                        handleMarkerClick={this.handleMarkerClick}
                        activeMarker={this.state.activeMarker}
                        showListingBox={this.state.showListingBox}
                        toggleAnimation={this.state.toggleAnimation}
                        toggleMarker={this.toggleMarker}
                        removeListingBoxFromMap={this.removeListingBoxFromMap}
                    />
                )}
                <div className="map-listings-container">
                    {this.props.listings &&
                        this.props.listings.map((elem, i) => (
                            <MapCard key={i} id={elem.id} data={elem} />
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
