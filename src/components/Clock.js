import React from "react";

/** This is a simple component that serves the purpose of
 * displaying how state and lifecycle works in React
 */
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        /* When you use an arrow function in setState like this, it will
        receive up-to-date state and props as arguments. 
        If you need to use the current state/props then it's best to do this
        because the code won't always show the latest version of it all */
        this.setState((state, props) => ({
            date: new Date()
        }));
    }

    render() {
        return (
            <h3 style={{ padding: 40 }}>
                It is {this.state.date.toLocaleTimeString()}
            </h3>
        );
    }
}

export default Clock;
