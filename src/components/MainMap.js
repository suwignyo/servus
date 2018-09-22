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
            showListingBox: false,
            activeInfoBoxId: null,
            listings: [
                {
                    id: 1,
                    photos: [
                        "/images/listing1.1.jpg",
                        "/images/listing1.2.jpg",
                        "/images/listing1.3.jpg"
                    ],
                    price: 4500,
                    landlords_id: 1,
                    lng: -79.39494,
                    lat: 43.644576,
                    neighbourhoods_id: 77,
                    street: "46 Spadina Ave",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M5V 2H8",
                    listings_id: 1,
                    bedrooms: 5,
                    bathrooms: 3,
                    description:
                        "Guess what? 46 Spadina is now a 4000 square feet house plus an unfinished basement! Includes 5 bedrooms upstairs with full sized windows & a walk-in closet in the master bedroom. Kitchen includes fridge, stove and dishwasher. Complete with a 4 piece bath upstairs and half bath on the main floor. Laminate flooring in the dining room and living room with a corner fireplace. Patio doors just off the dining room leads out to your own private deck and sunny west facing backyard. Fully fenced yard with a gate. Newer laminate flooring in the living room and dining room plus newer carpets throughout the unit. The finishing & appliances will not be exactly the same as shown in photos. ",
                    date_available: "2019-02-19T00:00:00.000Z"
                },
                {
                    id: 2,
                    photos: [
                        "/images/listing2.1.jpg",
                        "/images/listing2.2.jpg",
                        "/images/listing2.3.jpg"
                    ],
                    price: 4020,
                    landlords_id: 1,
                    lng: -79.408472,
                    lat: 43.663366,
                    neighbourhoods_id: 2,
                    street: "725 Bathurst St",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M5S 2R5",
                    listings_id: 2,
                    bedrooms: 2,
                    bathrooms: 3,
                    description:
                        "A Must see house *****PLUS office space unfinished basement with lots of storage!!!!\n    Spacious entry with large and bright kitchen with bright and spacious family room (open concept). Includes 5 appliances!\n    All bedrooms spacious, master has ensuite and VERY large walk in closet and space for an office nook upstairs hallway by window.\n    ",
                    date_available: "2019-02-19T00:00:00.000Z"
                },
                {
                    id: 3,
                    photos: [
                        "/images/listing3.1.jpg",
                        "/images/listing3.2.jpg",
                        "/images/listing3.3.jpg"
                    ],
                    price: 1950,
                    landlords_id: 1,
                    lng: -79.38572,
                    lat: 43.663252,
                    neighbourhoods_id: 1,
                    street: "25 Breadalbane St",
                    city: "Toronto",
                    province: "ON",
                    postal_code: "M4Y 1C2",
                    listings_id: 3,
                    bedrooms: 5,
                    bathrooms: 4,
                    description:
                        "This gorgeous home features a large modern kitchen on the main floor and a new second kitchen in the fully renovated basement. great amount of storage and closet space throughout, gorgeous hardwood floor. Large living and dining room area perfect for entertaining, high ceilings throughout. ",
                    date_available: "2019-02-19T00:00:00.000Z"
                }
            ],
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
            activeInfoBoxId: key
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
                                onClick={this.removeListingBoxFromMap}
                            />
                        }
                        mapElement={<div style={{ height: `100%` }} />}
                        handleMarkerClick={this.handleMarkerClick}
                        activeInfoBoxId={this.state.activeInfoBoxId}
                        showListingBox={this.state.showListingBox}
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
