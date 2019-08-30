import React, { Component } from "react";

export class VerticalNav extends Component {
    render() {
        return (
            <div className='verticalNavContainer'>
                <ul className='verticalNav'>
                    <li>React</li>
                    <ul className='verticalNav'>
                        <li>Components</li>
                        <ul className='verticalNav'>
                            <li>Functional</li>
                            <li>Class based</li>
                        </ul>
                        <li>State</li>
                        <li>Composition</li>
                        <li>Conditional Rendering</li>
                    </ul>
                </ul>
            </div>
        );
    }
}

export default VerticalNav;
