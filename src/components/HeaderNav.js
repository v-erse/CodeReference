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
            <nav className='navbar navbar-expand-lg navbar-dark'>
                <span className='navbar-brand'>
                    <NavLink to='/'>Code Reference</NavLink>
                </span>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'>
                    <ul className='navbar-nav ml-auto'>
                        <Link to='/HTML'>HTML</Link>
                        <Link to='/CSS'>CSS</Link>
                        <Link to='/JS'>JS</Link>
                        <Link to='/node'>Node</Link>
                        <Link to='/react'>React</Link>
                        <Link to='/back-end'>Back-end</Link>
                        <Link to='/design'>Design</Link>
                        <Link to='/algorithms'>Algorithms</Link>
                        <Link to='/optimization'>Optimization</Link>
                        <Link to='/deployment'>Deployment</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderNav;
