import React, { Component } from "react";

export class VerticalNav extends Component {
    render() {
        return (
            <ul
                className="nav flex-column float-left m-5 accordion"
                id="vertNav"
            >
                <li className="nav-item card">
                    <div className="nav-link card-header">
                        <button
                            className="btn btn-link"
                            data-toggle="collapse"
                            data-target="#sub1"
                        >
                            Components
                        </button>
                    </div>

                    <div id="sub1" data-parent="#vertNav">
                        peekaboo
                    </div>
                </li>
                <li className="nav-item card">
                    <a className="nav-link card-header">State</a>
                </li>
            </ul>
        );
    }
}

export default VerticalNav;
