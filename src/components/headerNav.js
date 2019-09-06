import React from "react";
import { Link } from "gatsby";

function NavLink(props) {
    return (
        <li className='nav-item'>
            <Link to={props.to} className='nav-link' activeClassName='active'>
                {props.children}
            </Link>
        </li>
    );
}

function HeaderNav(props) {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark'>
            <span className='navbar-brand'>
                <Link to='/'>Dev Reference</Link>
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
                    <NavLink to='/HTML'>HTML</NavLink>
                    <NavLink to='/CSS'>CSS</NavLink>
                    <NavLink to='/javascript'>JS</NavLink>
                    <NavLink to='/node'>Node</NavLink>
                    <NavLink to='/react'>React</NavLink>
                    <NavLink to='/back-end'>Back-end</NavLink>
                    <NavLink to='/design'>Design</NavLink>
                    <NavLink to='/algorithms'>Algorithms</NavLink>
                    <NavLink to='/deployment'>Deployment</NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderNav;
