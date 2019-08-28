import React, { Component } from "react";
/**
 * "React has a powerful composition model, and we recommend using
 * composition instead of inheritance to reuse code between components."
 *  - React Docs
 *
 * We use this.props.children instead of extending classes.
 */
export class CompositionVsInheritance extends Component {
    render() {
        return (
            <Hero
                // Pass text through props
                title='Hello, world!'
                // Pass JSX through props
                subtext={<h5>Lorem Ipsum Dolor Sit Amet</h5>}>
                {/* JSX put between tags goes into props.children */}
                <input
                    type='button'
                    class='btn btn-primary mt-4'
                    value='button'
                />
            </Hero>
        );
    }
}

function Hero(props) {
    return (
        <div className='jumbotron'>
            <h1>{props.title}</h1>
            <hr />
            <p>{props.subtext}</p>
            {props.children}
        </div>
    );
}

export default CompositionVsInheritance;
