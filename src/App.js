import React from "react";
import HeaderNav from "./components/HeaderNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactHome from "./pages/react/ReactHome";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 */

function App() {
    return (
        <Router>
            <HeaderNav theme="dark" />
            <Route exact path="/" component={Home} />
            <Route path="/react" component={ReactHome} />
        </Router>
    );
}

export default App;
