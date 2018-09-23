import React, { Component } from "react";
import "../styles/Help.css";
import Select from "react-select";

let serviceOptions = [
    { value: "Doctors", label: "Doctors" },
    { value: "Lawyers", label: "Lawyers" },
    { value: "Accountants", label: "Accountants" },
    { value: "Place of Worship", label: "Place of Worship" },
    { value: "Temples", label: "Temples" },
    { value: "Local Markets", label: "Local Markets" }
];
class Help extends Component {
    render() {
        return (
            <div className="help">
                <form className="form-labels-on-top" method="post" action="#">
                    <div class="form-title-row">
                        <h1>List Your Service</h1>
                    </div>
                    <div className="form-row">
                        <label>
                            <span>Name</span>
                            <input type="text" name="name" />
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            <span>Service</span>
                            <input type="service" name="service" />
                        </label>
                    </div>

                    <div className="form-row">
                        <label>
                            <span>Language</span>
                            <input type="language" name="language" />
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            <span>Address</span>
                            <input type="address" name="address" />
                        </label>
                    </div>
                    <div className="form-row">
                        <label>
                            <span>Hours</span>
                            <input type="address" name="address" />
                        </label>
                    </div>
                    <div className="form-row" onClick={e => e.preventDefault()}>
                        <button>Submit Form</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Help;
