import React, { Component } from "react";
/**
 * "React has a powerful composition model, and we recommend using
 * composition instead of inheritance to reuse code between components."
 *  - React Docs
 *
 * We use this.props.children instead of extending classes.
 */

class Hero extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>{this.props.title}</h1>
                <hr />
                <p>{this.props.subtext}</p>
                {this.props.children}
            </div>
        );
    }
}

export class CompositionVsInheritance extends Component {
    render() {
        return (
            <Hero title={"Hello, world!"} subtext="lorem ipsum dolor sit amet">
                <input type="button" class="btn btn-primary" value="a button" />
            </Hero>
        );
    }
}

export default CompositionVsInheritance;
