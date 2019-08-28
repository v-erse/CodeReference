import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HeaderNav extends React.Component {
    render() {
        return (
            <nav
                className={`navbar navbar-expand-lg navbar-${this.props.theme} bg-${this.props.theme}`}>
                <Link to='/' className='navbar-brand'>
                    Web Dev Cheatsheet
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'>
                    <span className='navbar-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/HTML' className='nav-link'>
                                HTML
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/CSS' className='nav-link'>
                                CSS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/JS' className='nav-link'>
                                JavaScript
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/node' className='nav-link'>
                                Node
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/react' className='nav-link'>
                                React
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='back-end' className='nav-link'>
                                Back-end
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='deployment' className='nav-link'>
                                Deployment
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderNav;
