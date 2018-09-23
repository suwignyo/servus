import React, { Component } from "react";
import "../styles/AboutUs.css";

class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus">
                <div className="aboutus-heading">
                    <h1>ABOUT US</h1>
                    <p>
                        Servus aims to provide accessibility to cultural and
                        professional services for non-official language
                        speakers. Tap into your cultural communities and be
                        comfortable!
                    </p>
                </div>
                <div className="about-section-container">
                    <div className="left-about-us">
                        <h2>
                            Striving to be the bridge between the community and
                            the professional services
                        </h2>
                        <p>
                            Clients are more likely to seek same language
                            services because there is a sense of comfortability
                            when explaining the problem to the professional.
                        </p>
                    </div>
                    <div className="right-about-us">
                        <h2>Community focused and built </h2>
                        <p>
                            Having a community driven database, individuals can
                            get the more accurate and best result that caters
                            towards their needs. We’ll do our part to continue
                            to process and update data to better guide users to
                            the best possible service they can have.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
