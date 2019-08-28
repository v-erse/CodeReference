import React, { Component } from "react";
/**
 * An input form element whose value is controlled by React is
 * called a Controlled Component
 *
 * For a more advanced solution to forms in React, Formik is a
 * good one
 */
export class ControlledComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            selection: "coconut"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        // makes use of computer properties
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        alert(this.state.input + "\n" + this.state.selection);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input:{" "}
                        <input
                            type='text'
                            name='input'
                            value={this.state.input}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type='submit' value='Submit' />
                    <p>{this.state.input}</p>
                </form>
                <form onSubmit={this.handleSubmit}>
                    <select
                        name='selection'
                        value={this.state.selection}
                        onChange={this.handleChange}>
                        <option value='grapefruit'>Grapefruit</option>
                        <option value='lime'>Lime</option>
                        <option value='coconut'>Coconut</option>
                        <option value='mango'>Mango</option>
                    </select>
                    <input type='submit' value='Submit' />
                    <p>{this.state.selection}</p>
                </form>
            </div>
        );
    }
}

export default ControlledComponents;
