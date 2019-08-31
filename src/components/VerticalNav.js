import React, { Component } from "react";

export class VNavItem extends Component {
    constructor(props) {
        super(props);
        this.state = { highlighted: false };
    }

    handleMouseEnter = () => {
        this.setState({ highlighted: true });
    };

    handleMouseLeave = () => {
        this.setState({ highlighted: false });
    };

    render() {
        let styles = this.state.highlighted
            ? { color: "blue" }
            : { color: "black" };
        return (
            <li
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                style={styles}>
                {this.props.title}
            </li>
        );
    }
}

export class VerticalNav extends Component {
    constructor(props) {
        super(props);
        this.state = { active: "React" };
    }

    render() {
        React.Children.forEach(this.props.children, (child) => {
            if (!React.isValidElement(child)) {
                return child.props.title;
            }

            if (child.props.children) {
                child = React.cloneElement(child, { children });
            }
        });

        return (
            <div className='verticalNavContainer'>{this.props.children}</div>
        );
    }
}

export default VerticalNav;
