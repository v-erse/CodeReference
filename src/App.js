import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./vs2015.css";
import Favicon from "react-favicon";

import HeaderNav from "./components/HeaderNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Languages from "./pages/Languages/Languages";
import ReactHome from "./pages/react/ReactHome";
import JSHome from "./pages/javascript/JShome";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 * https://overreacted.io/a-complete-guide-to-useeffect/
 */

function App() {
    return (
        <div>
            <Favicon url='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/twitter/214/abacus_1f9ee.png' />
            <Router>
                <HeaderNav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Languages' component={Languages} />
                    <Route path='/React' component={ReactHome} />
                    <Route path='/JavaScript' component={JSHome} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
