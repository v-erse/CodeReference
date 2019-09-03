import React from "react";
import { NavLink } from "react-router-dom";

function Link(props) {
    return (
        <li className='nav-item'>
            <NavLink
                to={props.to}
                className='nav-link'
                activeClassName='active'>
                {props.children}
            </NavLink>
        </li>
    );
}

class HeaderNav extends React.Component {
    render() {
        return (
            <nav class='navbar navbar-expand-lg navbar-dark'>
                <a class='navbar-brand' href='#'>
                    Web Dev Cheatsheet
                </a>
                <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>

                <div
                    class='collapse navbar-collapse'
                    id='navbarSupportedContent'>
                    <ul class='navbar-nav ml-auto'>
                        <Link to='/HTML'>HTML</Link>
                        <Link to='/CSS'>CSS</Link>
                        <Link to='/JS'>JS</Link>
                        <Link to='/node'>Node</Link>
                        <Link to='/react'>React</Link>
                        <Link to='/back-end'>Back-end</Link>
                        <Link to='/deployment'>Deployment</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderNav;
