import React, { Component } from "react";

class CollapsibleList extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <ul className='collapsibleList'>
                <label onClick={this.handleToggle}>{this.props.title}</label>
                <ul>{this.state.open ? this.props.children : " "}</ul>
            </ul>
        );
    }
}

export class VerticalNav extends Component {
    render() {
        return (
            <CollapsibleList title='a'>
                <li>1</li>
                <CollapsibleList title='b'>
                    <li>Lorem ipsum</li>
                    <li>dolor sit amet</li>
                    <li>consectetur adipisicing elit?</li>
                </CollapsibleList>
                <li>2</li>
                <li>3</li>
            </CollapsibleList>
        );
    }
}

export default VerticalNav;
