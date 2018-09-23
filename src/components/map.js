import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import MapMarker from "./MapMarker"

const MapComponent = withScriptjs(
    withGoogleMap(props => {
        const listingMarkers = props.listings.map((elem, i) => {
        const position = { lat: elem.lat, lng: elem.lng }

        //If the marker's id matches the activeInfoBoxId passed down from Rentals Map
        //then set showInfoBox to true so that it is rendered
        const animationOn = props.activeMarker === elem.id ? true : false;
        return (
        <MapMarker
          key={i}
          id={elem.id}
          position={position}
          animation = { props.animation }
          handleMarkerClick = { props.handleMarkerClick }
          showListingBox = { props.showListingBox }
          animationOn = { animationOn }
        />
        )
        })

        return (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat: 43.659805, lng: -79.388786}}
            >
                {props.listings && listingMarkers}
            </GoogleMap>
        );
    })
);

export default MapComponent;
