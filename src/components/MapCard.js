import React, { Component } from "react";
import { connect } from "react-redux";

class MapCard extends Component {
    componentDidMount() {
        console.log(this.props.data.img);
    }
    render() {
        return (
            <div>
                <div className="listing-map-card">
                    <div className="listing-map-img-container">
                        <img src={this.props.data.img} alt="doctor image" />
                    </div>
                    <div className="listing-map-info-container">
                        <div>
                            <div className="doctor-name">
                                {this.props.data.name}
                            </div>
                            <div className="distance-away">500m</div>
                        </div>
                        <div>
                            <div className="service">
                                {this.props.data.service}
                            </div>
                            <div className="languages-heading">Languages</div>
                        </div>
                        <div className="langauges-spoken">
                            {this.props.data.languages.join(", ")}
                        </div>
                        <div>{this.props.data.office}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapCard;
