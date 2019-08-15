import React, { Component } from "react";

/**
 * Usually a list of elements would be made into a
 * component itself
 */
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) => (
        // React will ask for keys for each list item, as a form of ID
        <li key={index}>{number}</li>
    ));
    return <ul>{listItems}</ul>;
}

export class ListsAndKeys extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [1, 2, 3, 4, 5] };
    }

    render() {
        return (
            <div>
                <p>From Component</p>
                <NumberList numbers={this.state.numbers} />
                {/* You can also embed the list inline like below. 
                It's usually easier to read this way. */}
                <p>From embedded map</p>
                <ul>
                    {this.state.numbers.map(number => (
                        <li key={number.toString()}>{number}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListsAndKeys;
