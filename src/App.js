import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import A11y from "./components/React-docs-guide/Advanced-guides/A11y";
import Home from "./components/Home";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 */

function App() {
    return (
        <Router>
            <Nav theme="dark" />
            <Route exact path="/" component={Home} />
        </Router>
    );
}

export default App;
