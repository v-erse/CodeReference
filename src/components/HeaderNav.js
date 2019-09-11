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
                    <NavLink to='/'>
                        <img
                            className='logo d-inline-block align-top'
                            src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/214/abacus_1f9ee.png'
                            width='30'
                            height='30'
                            alt=''
                        />
                        Code Reference
                    </NavLink>
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
                        <Link to='/languages'>Languages</Link>
                        <Link to='/front-end'>Front-end</Link>
                        <Link to='/back-end'>Back-end</Link>
                        <Link to='/design'>Design</Link>
                        <Link to='/algorithms'>Algorithms</Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderNav;
