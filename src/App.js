import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/HeaderNav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactHome from "./pages/react/ReactHome";
import Footer from "./components/Footer";
import JSHome from "./pages/javascript/JSHome";

/**
 * Relevant links:
 * https://roadmap.sh/
 * https://frontendmasters.com/books/front-end-handbook/2019/
 */

function App() {
    return (
        <div>
            <Router>
                <HeaderNav />
                <Route exact path='/' component={Home} />
                <Route path='/react' component={ReactHome} />
                <Route path='/JS' component={JSHome} />
            </Router>
            <Footer />
        </div>
    );
}

export default App;
