import React from "react";

class Nav extends React.Component {
    render() {
        return (
            <nav
                className={`navbar navbar-expand-lg navbar-${
                    this.props.theme
                } bg-${this.props.theme}`}
            >
                <a className="navbar-brand" href="#">
                    Web Dev Cheatsheet
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                HTML
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                CSS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                JavaScript
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Node
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Front-end
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Back-end
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Deployment
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
