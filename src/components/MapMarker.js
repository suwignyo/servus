import React from "react";
import { Marker } from "react-google-maps";

const MapMarker = props => {
  return (
    <Marker
      position={props.position}
      animation={props.animationOn ? 1 : null}
      onClick={() => props.handleMarkerClick(props.id)}
    >
    </Marker>
  );
};

export default MapMarker;
