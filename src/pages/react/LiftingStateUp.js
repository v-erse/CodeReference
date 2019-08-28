import React, { Component } from "react";

/**
 * State is used when the data involved will change over time.
 * Otherwise we only use props.
 *
 * Often, several components need to reflect the same changing
 * data. This is why we lift the shared state up to their
 * closest common ancestor.
 *
 * Example taken from https://reactjs.org/docs/lifting-state-up.html
 */

/* Variables and Helper Functions.  */
const scaleNames = {
    c: "celsius",
    f: "fahrenheit"
};

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

/* Components */
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water will boil.</p>;
    }
    return <p>The water will not boil.</p>;
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: "" };
    }

    handleChange(e) {
        // onTemperatureChange function provided by parent
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // temperature value prop provided by parent
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}

export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { temperature: "", scale: "c" };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({ temperature, scale: "c" });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ temperature, scale: "f" });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius =
            scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit =
            scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />

                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;
