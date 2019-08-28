import React from "react";

/** Simple component to show how DOM event handling works
 * in React
 */
class EventHandling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }

    handleClick = () => {
        this.setState((state) => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <div>
                <button
                    className={`btn btn-${
                        this.state.isToggleOn ? "dark" : "light"
                    }`}
                    style={{ margin: 30 }}
                    onClick={this.handleClick}>
                    {this.state.isToggleOn
                        ? "Turn Lights On"
                        : "Turn Lights Off"}
                </button>
            </div>
        );
    }
}

export default EventHandling;
