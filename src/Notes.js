import React from "react";

class Note extends React.Component {
    render() { return (
        <div>
            <h3>What is react?</h3>
            <ul>
                <li>
                    React is the view layer of an MVC (model view controller)
                    application
                </li>
                <li>With React, you can create web apps with components</li>
                <li>React uses states and props to handle data</li>
            </ul>
            <h3>React uses JSX</h3>
            <ul>
                <li>JSX is a way to write HTML with Javascript</li>
                <li>
                    It allows us to remove the separation of UI and UI logic
                    that traditionally comes with HTML and JavaScript
                </li>
                <ul>
                    <li>
                        For example,
                        <ul>
                            <li className="noBullet">
                                <code>const name = "Abbey"</code> <br />
                            </li>
                            <li className="noBullet">
                                <code>
                                    const element = {`<h1>Hello, {name}<h1/>`}
                                </code>
                            </li>
                        </ul>
                        When rendered, element will turn out to be "Hello,
                        Abbey"
                    </li>
                </ul>
                <li>JSX can also be an expression</li>
                <ul>
                    <li className="noBullet" style={{ whiteSpace: "pre" }}>
                        <code>
                            {`
    function getGreeting(user) {
        if (user) {
            return <h1>Hello, {user}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
    }`.trim()}
                        </code>
                    </li>
                </ul>
            </ul>
        </div>;
    )}
}
