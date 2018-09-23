import React, { Component } from "react";
import "../styles/Team.css";

class Team extends Component {
    render() {
        return (
            <div className="team-container">
                <p className="team-heading">TEAM</p>
                <div className="team">
                    <div className="team-member">
                        <img
                            className="team-pic"
                            src={require("../assets/tommy.jpg")}
                        />
                        <p className="team-member-name">Tommy Poon</p>
                        <p>Developer</p>
                    </div>
                    <div className="team-member">
                        <img
                            className="team-pic"
                            src={require("../assets/brandon.png")}
                        />
                        <p className="team-member-name">Brandon Lee</p>
                        <p>Marketing/Design</p>
                    </div>
                    <div className="team-member">
                        <img
                            className="team-pic"
                            src={require("../assets/frank.jpeg")}
                        />
                        <p className="team-member-name">Frank Zhou</p>
                        <p>Developer</p>
                    </div>
                    <div className="team-member">
                        <img
                            className="team-pic"
                            src={require("../assets/gerry.jpeg")}
                        />
                        <p className="team-member-name">Gerry Suwignyo</p>
                        <p>Developer</p>
                    </div>
                    <div className="team-member">
                        <img
                            className="team-pic"
                            src={require("../assets/minh.png")}
                        />
                        <p className="team-member-name">Minh Tran</p>
                        <p>Strategist</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Team;
