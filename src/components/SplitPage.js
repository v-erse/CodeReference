import React, { Component } from "react";

export class SplitPage extends Component {
    render() {
        return (
            <div className='splitPage'>
                <div className='splitPageLeft'>{this.props.left}</div>
                <div className='splitPageRight'>{this.props.right}</div>
            </div>
        );
    }
}

export default SplitPage;
